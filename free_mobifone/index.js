
const express = require('express')
const app = express()
const port = 3600
app.get('/', (req, res) => {
  const {query} = req;
  res.send(`Hello Tdsai! ${query.link}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})