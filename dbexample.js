const connection = require('./connection');
const userTable = require('./userCreate');
const insertData = require('./insertData');
const db1 = require('./dbCreate');
const selectData = require('./selectdata');
const selectUnique = require('./selectunique');
const util = require('util');
const con = connection();
const query = util.promisify(con.query).bind(con);


//Creating the database
// db1(con);

//Creating the table
// userTable(con);


//Altering the table
// con.query('ALTER TABLE USER ADD COLUMN AGE INT(10)', (err, res) => {
//     if(err) throw err;
//     console.log('Table altered');
//   })


//Inserting the records
let arr = [['Vijay', 'jayvsvijay.com', 25],
['Kiran', 'jayvskiran.com', 25]];
// arr.map(ar=>insertData(con,ar));


//Updating the particular record
// let upd = "UPDATE USER SET AGE=29 WHERE ID=10";
// con.query(upd, (err, res)=>{
//     if(err) throw err;
//     console.log('Data updated')
// })

//Deleting particular record
// let del = `DELETE FROM USER WHERE NAME="KIRAN"`;
// con.query(del, (err, res) => {
//     if(err) throw err;
//     console.log('1 row deleted');
// })


//Selecting the records
// (async function(){let users = await selectData(query);
// console.log(users[0]);
// })()

//Table deletion
// con.query('DROP TABLE USER',(err, res) => {
//     if(err) throw err;
//     console.log('Table deleted');
// })


//Selecting unique records
// (async ()=>{
//     let vijay = await selectUnique(query);
//     console.log(vijay);
// })();
