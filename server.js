const express = require('express')
const PORT = process.env.PORT

const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.listen(PORT,()=>{
    console.log(`Server is Running successfully at port ${PORT}`)
})


