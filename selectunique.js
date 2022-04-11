async function selectUnique(query) {
    let sql = 'SELECT * FROM USER WHERE NAME = "vijay"';
    let users = await query(sql);
    return users;
}

module.exports = selectUnique;