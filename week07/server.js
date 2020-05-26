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
        background-color: rgb(255, 255, 255);
      }

      .item-1 {
        width: 200px;
        height: 100px;
        align-self: center;
        background-color: rgb(255, 0, 0);
      }

      .item-2 {
        flex: 1;
        height: 200px;
        background-color: rgb(255, 255, 0);
      }
    </style>
</head>
    <body>
      <div id="container">
        <div class="item-1"></div>
        <div class="item-2"></div>
      </div>
    </body>
</html>
`
  )
})

server.listen(3000, () => {
  console.log('server started at port 3000')
})
