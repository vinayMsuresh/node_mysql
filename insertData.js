function insertData(con, data){
    const values = [data]
    const ins = `INSERT INTO USER (NAME,EMAIL,AGE) VALUES ?`;
    con.query(ins ,[values], (err, res) => {
        if(err) throw err;
        console.log('1 data inserted');
    })
}

module.exports = insertData;