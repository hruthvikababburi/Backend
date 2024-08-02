const db = require('../database/db/js')
const bcrypt = require('bcryptjs')
exports.register=(req,res)=>{
    const {username,password} = req.body 
    const hashedPassword = bcrypt.hashSync(password,10)
    const regQuery = `INSERT INTO users (username,password) VALUES(?,?)`

    db.run(regQuery,[username,hashedPassword],(err)=>{
        if(err){
            return res.status(500).json({message:'User Registration failed',error:err.message})
        }
    })
}