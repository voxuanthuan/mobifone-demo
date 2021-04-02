
const express = require('express')
const app = express()
const port = 3600
app.get('/', (req, res) => {
  const {query} = req;
  res.redirect('http://localhost:1996/?msisdn=123213213')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})