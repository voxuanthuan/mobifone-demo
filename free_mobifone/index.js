
const express = require('express')
const app = express()
const port = 3600
app.get('/api/msisdn', (req, res) => {
  const { query } = req;
  console.log(query.callback);
  res.redirect(`${query.callback}?link=adsdsdas`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})