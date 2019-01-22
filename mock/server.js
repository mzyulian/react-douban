const path = require('path')
const express = require('express')

const app = express()
const DIST_DIR = path.join(__dirname, 'dist') // 设置静态访问文件路径
const PORT = 9090 // 设置启动端口

// 这个方法和下边注释的方法作用一样，就是设置访问静态文件的路径
app.use(express.static(DIST_DIR))

let apiRouter = require('./api')
app.use('/api', apiRouter)

app.listen(PORT, function() {
  console.log('成功启动：localhost:' + PORT)
})
