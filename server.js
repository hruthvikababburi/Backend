const express = require('express')
const PORT = 3000

const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.listen(PORT,()=>{
    console.log(`App is Running successfully at port ${PORT}`)
})


