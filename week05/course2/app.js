const http = require('http')
const server = http.createServer((req, res) => {
  const reqHeaders = req.headers
  console.log('req header', reqHeaders)
  res.setHeader('content-type', 'text/html')
  res.setHeader('X-FOO', 'bar')
  res.writeHead(200, { 'Content-Type': "text/plain"})
  res.end('ok')
})

server.listen(3000, () => {
  console.log('server started at port 3000')
})