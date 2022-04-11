const util = require('util');
async function selectData (query){
    let sql = 'SELECT * FROM USER';
    const users = await query(sql);
    return users;
}

module.exports = selectData;