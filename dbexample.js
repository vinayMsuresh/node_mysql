const connection = require('./connection');
const userTable = require('./userCreate');
const insertData = require('./insertData');
const db1 = require('./dbCreate');
const con = connection();
// db1(con);
userTable(con);
insertData(con,['Ajay', 'jayvsajay.com', 89]);

// con.query('ALTER TABLE USER ADD COLUMN AGE INT(10)', (err, res) => {
//   if(err) throw err;
//   console.log('Table altered');
// })


