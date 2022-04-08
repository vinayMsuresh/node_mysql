const mysql = require('mysql');
function connectDB(){
    const con = mysql.createConnection({
        host: "localhost",
        user : 'root',
        password : '1234',
        database : 'db1'
    })

    con.connect((err) => {
        if(err) throw err;
        console.log('Connected');
    })
    return con;
}

module.exports = connectDB;