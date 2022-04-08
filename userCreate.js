function userCreate(con) {
    let sql = 'CREATE TABLE IF NOT EXISTS USER(ID INT(3) AUTO_INCREMENT PRIMARY KEY, NAME VARCHAR(25), EMAIL VARCHAR(25))';
    con.query(sql, (err, res)=>{
        if(err) throw err;
        console.log('usser table created');
    })
}

module.exports = userCreate;