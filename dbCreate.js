function dbCreate(con){
    con.query("CREATE DATABASE IF NOT EXISTS DB1", (err, result) => {
        if(err) throw err;
        console.log("DB created");
    })
}

module.exports = dbCreate;