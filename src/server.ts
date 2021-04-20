import express from 'express'

const app = express()

app.get('/', (_, response) => {
  return response.json({ msg: 'Hello world!' })
})

app.listen(3333, () => console.log('Server running!'))