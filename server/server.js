const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', async (req, res) => {
  const { data } = await axios.get(`https://swapi.dev/api/planets/${req.body.planet}/`)
  res.send(data.name)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})