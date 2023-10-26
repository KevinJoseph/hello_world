import express from "express"

const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/thanks', (req, res) => {
  res.send('Universidad Nacional de Cañete')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

