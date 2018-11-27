/*
 * @Author: AK-12 
 * @Date: 2018-11-26 15:39:26 
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-11-27 13:15:25
 */
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  let pathname = './assets' + req.url
  // 设置跨域许可
  res.setHeader("Access-Control-Allow-Origin", "*")

  if (req.method === 'GET') {
    fs.readFile(pathname, (err, data) => {
      if (err) {
        res.write('404')
      } else {
        res.write(data)
      }
      res.end()
    })
  }

  if (req.method === 'POST') {
    let str = ''
    req.on('data', data => {
      str += data
    })
    req.on('end', () => {
      fs.writeFile(pathname, str)
      res.write(str)
      res.end()
    })
  }

}).listen(8088,
  'localhost',
  () => console.log('http://localhost:8088/index.html')
)