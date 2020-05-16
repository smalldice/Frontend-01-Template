// request line:     method: POST path:/ httpVersion: HTTP 1.1
// request headers:  HOST: 127.0.0.1
// request headers:  Content-Type: application/json
// request body:     '{ 'id': '1', ..., 'key': 'value'}'
// status line:      HTTP/1.1 200 OK
// response headers: Content-Type: text/plain
// response body:    <html><title>response 4040</title></html>

const net = require('net')

/* 
 * method: url = host + port + path
 * body: k/v
 * headers 
 */
// 请求
class Request {
  constructor(options) {
    this.method = options.method || 'GET'
    this.host = options.host
    this.path = options.path
    this.port = options.port || 80
    this.body = options.body || {}
    this.headers = options.headers || {}

    if (!this.headers['Content-Type']) {
      this.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }

    if (this.headers['Content-Type'] === 'application/json') {
      this.bodyText = JSON.stringify(this.body)
    }

    if (this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      this.bodyText = Object.keys(this.body).map(key => {
        return `${key}=${encodeURIComponent(this.body[key])}`
      }).join('&')
    }

    this.headers['Content-Length'] = this.bodyText.length
  }

  toString () {
    const str = `
${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r
\r
${this.bodyText}`

    return str
  }

  send(connection) {
    const parser = new ResponseParser()
    return new Promise((resolve, reject) => {
      if (connection) {
        connection.write(this.toString())
      } else {
        connection = net.createConnection({ host: this.host, port: this.port}, () => {
          connection.write(this.toString())
        })

        connection.on('data', (data) => {
          parser.receive(data.toString())
          console.log(parser.statusLine)
          console.log(parser.headers)
          if (parser.isFinished) {
            resolve(parser.getResponse)
          }

          connection.end()
        })

        connection.on('error', (error) => {
          reject(error)
          connection.end()
        })
      }
    })
  }
}

class Response {
  
}

class ResponseParser {
  constructor () {
    this.WAITING_STATUS_LINE = 0;
    this.WAITING_STATUS_LINE_END = 1;
    this.WAITING_HEADER_NAME = 2;
    this.WAITING_HEADER_SPACE = 3;
    this.WAITING_HEADER_VALUE = 4;
    this.WAITING_HEADER_LINE_END = 5;
    this.WAITING_HEADER_BLOCK_END = 6;
    this.WAITING_BODY = 7;

    this.current = this.WAITING_STATUS_LINE;
    this.statusLine = '';
    this.headers = {};
    this.headerName = '';
    this.headerValue = '';
    this.bodyParser = null;
    this.bodyText = '';
  }

  get isFinished () {
    return this.bodyParser && this.bodyParser.isFinished
  }

  get Response () {
    this.statusLine.match(/HTTP\/1.1 ([0-9])+ ([\s\S]+)/)
    return {
      statusCode: RegExp.$1,
      statusText: RegExp.$s,
      headers: this.headers,
      body: this.bodyParser.content.join('')
    }
  }

  receive (string) {
    for (let i = 0; i< string.length; i++) {
      this.receiveChar(string.charAt(i))
    }
  }

  receiveChar (char) {
    if (this.current === this.WAITING_STATUS_LINE) {
      if (char === '\r') {
        this.current = this.WAITING_STATUS_LINE_END
      } else {
        this.statusLine += char
      }
    } else if (this.current === this.WAITING_STATUS_LINE_END) {
      if (char === '\n') {
        this.current = this.WAITING_HEADER_NAME
      }
    } else if (this.current === this.WAITING_HEADER_NAME) {
      if (char === ':') {
        this.current = this.WAITING_HEADER_SPACE
      } else if(char === '\r') { 
        this.current = this.WAITING_HEADER_BLOCK_END
        if (this.headers['Transfer-Encoding'] === 'chunked') {
          this.bodyParser = new TrunkedBodyParser()
        }
      } else {
        this.headerName += char
      }
    } else if (this.current === this.WAITING_HEADER_SPACE) {
      if (char === ' ') {
        this.current = this.WAITING_HEADER_VALUE
      }
    } else if (this.current === this.WAITING_HEADER_VALUE) {
      if (char === '\r') {
        this.current = this.WAITING_HEADER_LINE_END
        this.headers[this.headerName] = this.headerValue
        this.headerName = ''
        this.headerValue = ''
      } else {
        this.headerValue += char;
      }
    } else if (this.current === this.WAITING_HEADER_LINE_END) {
      if (char === '\n') {
        this.current = this.WAITING_HEADER_NAME
      }
    } else if (this.current === this.WAITING_HEADER_BLOCK_END) {
      if (char === '\n') {
        this.current = this.WAITING_BODY
      }
    } else if(this.current === this.WAITING_BODY) {
      console.log(JSON.stringify(char))
      this.bodyParser.receive(char)

      if (this.bodyParser.isFinished) {
        this.bodyText = this.bodyParser.content
      }
    }
  }
}

class TrunkedBodyParser {
  constructor () {
    this.WAITING_LENGTH = 0
    this.WAITING_LENGTH_LINE_END = 1
    this.READING_TRUNK = 2
    this.WAITING_NEW_LINE = 3
    this.WAITING_NEW_LINE_END = 4

    this.length = 0
    this.content = []
    this.isFinished = false
    this.current = this.WAITING_LENGTH
  }
  
  receive(char) {
    if (this.current === this.WAITING_LENGTH) {
      if (char === '\r') {
        if (this.length === 0) {
          console.log(this.content)
          this.isFinished = true
        }
        this.current = this.WAITING_LENGTH_LINE_END
      } else {
        this.length *= 10
        this.length = char.charCodeAt(0) - '0'.charCodeAt(0)
      }
    } else if(this.current === this.WAITING_LENGTH_LINE_END) {
      if (char === '\n') {
        this.current = this.READING_TRUNK
      }
    } else if(this.current === this.READING_TRUNK) {
      this.content.push(char)
      this.length--
      if (this.length === 0) {
        this.current = this.WAITING_NEW_LINE
      }
    } else if(this.current === this.WAITING_NEW_LINE) {
      if (char === '\r') {
        this.current = this.WAITING_NEW_LINE_END
      }
    } else if(this.current === this.WAITING_NEW_LINE_END) {
      if (char === '\n' && this.isFinished) {
        this.current = this.WAITING_LENGTH
      }
    }
  }
}

let request = new Request({ 
  host: '127.0.0.1', 
  port: 3000,
  method: 'POST',
  path: '/',
  port: 3000,
  body: {
    name: 'xjh'
  }
})

request.send().then(data => {
  console.log('response: ===============\n', data, '=====================\n')
})

// const client = net.createConnection({ host: '127.0.0.1', port: 3000 }, () => {
//   console.log('connected to server!')
//   client.write(new Request({
//     method: 'POST',
//     path: '/',
//     port: 3000,
//     body: {
//       name: 'xjh'
//     }
//   }).toString())
// })

// client.on('data', (data) => {
//   console.log('data', data.toString())
//   client.end()
// })

// client.on('end', () => {
//   console.log('connection has been closed')
// })

// client.on('error', (err) => {
//   console.log(err);
// })