const http = require('http')
const server = http.createServer((req, res) => {
  const reqHeaders = req.headers
  console.log('req header', reqHeaders)
  res.setHeader('content-type', 'text/html')
  res.setHeader('X-FOO', 'bar')
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(
    `
<html maaa=a >
<head>
    <style>
    body div #myid {
      width: 100px;
      background-color: #ff5000;
    }
    body div .a {
      width: 100px;
      background-color: #ff5000;
    }

    body div .b {
      width: 100px;
      background-color: #ff5000;
    }
    </style>
    <body>
      <div>
        <img id="myid" class="a b"/>
        <img />
      </div>
    </body>
</head>
</html>
`
  )
})

server.listen(3000, () => {
  console.log('server started at port 3000')
})
