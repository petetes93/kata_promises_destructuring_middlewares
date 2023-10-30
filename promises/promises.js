const express = require('express')
const fs = require('fs/promises')
const app = express()

app.get('/allRaces', (req, res) => {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => res.json())
    .then((data) => res.json(data))
})

app.get('/singleImg', (req, res) => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((data) => res.json(data))
})

//! saca todas las imagenes de todas las razas
// app.get('/allImages', (req, res) => {
//   fetch('https://dog.ceo/api/breed/hound/images')
//     .then((res) => res.json())
//     .then((data) => res.json(data))
// })
//? como podemos sacar solo 1 raza con todas sus fotos?
app.get('/allImages/:raza', (req, res) => {
  const raza = req.params.raza
  fetch(`https://dog.ceo/api/breed/${raza}/images`)
    .then((res) => res.json())
    .then((data) => res.json(data))
    .catch((error) =>
      res
        .status(500)
        .json({ error: 'Error al obtener las imágenes de la raza' })
    )
})
app.listen(4003, () => console.log('server on...'))
