const express = require('express')
const {PORT} = require('./config/config.js')

const cors = require('cors')
const bodyParser = require('body-parser')

const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');


const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);


app.listen(PORT,()=>{
    console.log(`Server is Running successfully at port ${PORT}`)
})


