const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('./database/todos.db',(err)=>{
    if(err){
        console.log(`Error while opening database ${err.message}`)
        return;
    }
    else{
        console.log('Connected to SQLite database')
    }
    const usersCreateTable = `CREATE TABLE IF NOT EXISTS users
                                (id INTEGER PRIMARY KEY AUTOINCREMENT,
                                username TEXT UNIQUE NOT NULL,
                                password TEXT NOT NULL)`
    const todosCreateTable = `CREATE TABLE IF NOT EXISTS todos 
                                (id INTEGER PRIMARY KEY AUTOINCREMENT,
                                user_id INTEGER,
                                description TEXT NOT NULL,
                                status TEXT,
                                FOREIGN KEY(user_id) REFERENCES users(id))`

    db.run(usersCreateTable,(err)=>{
        if(err){
            console.log(`Error while creating users table ${err.message}`)
        }
    })     
    db.run(todosCreateTable,(err)=>{
        if(err){
            console.log(`Error while creating todos table ${err.message}`)
        }
    })                            
})

module.exports = db