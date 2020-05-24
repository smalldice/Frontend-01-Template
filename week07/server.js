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
      #container {
        display: flex;
        width: 800px;
      }

      .item-1 {
        width: 200px;
        height: 100px;
        align-self: center;
      }

      .item-2 {
        flex: 1;
        height: 200px;
      }
    </style>
    <body>
      <div id="container">
        <div class="item-1"></div>
        <div class="item-2"></div>
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
