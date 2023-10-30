console.log('test')

//! ejercicio 1

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const pets = [
  { name: 'Lassie', type: 'dog' },
  { name: 'Felix', type: 'cat' },
  { name: 'Garfield', type: 'cat' },
  { name: 'Peter', type: 'rabbit' },
]

//! Primer middleware
app.use((req, res, next) => {
  console.log('Request received:', new Date(), req.method, req.url)
  console.log('Request body:', req.body)

  if (req.method === 'POST' && req.get('content-type') !== 'application/json') {
    return res.status(400).send({
      error: 'Invalid content type. Expected application/json.',
    })
  }

  next()
})

//! segundo middleware
app.post('/pets', (req, res) => {
  const pet = req.body

  for (let requiredParameter of ['name', 'type']) {
    if (!pet[requiredParameter]) {
      return res.status(422).send({
        error: `Expected format: { name: <String>, type: <String> }. You're missing a "${requiredParameter}" property.`,
      })
    }
  }

  const { name, type } = pet

  pets.push({ name, type })

  res.status(201).json({ name, type })
})

app.get('/pets', (req, res) => {
  res.status(200).json(pets)
})

app.listen(port, () => {
  console.log(`Middleware exercise server running on http://localhost:${port}`)
})
