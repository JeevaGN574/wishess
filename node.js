const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/prank', (req, res) => {
  res.render('prank.ejs')
})

app.get('/surprize', (req, res) => {
  res.render('bir.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})