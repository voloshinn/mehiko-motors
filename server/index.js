const express = require('express')
const PORT = 3001
const cors = require('cors')
const index = require('./routes/index')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', index)

const start = () => {
  try {
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch(e) {
    console.log(e)
  }
}

start()
