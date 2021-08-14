const bcrypt = require('bcryptjs');

const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10)
    //console.log(hash)
    return hash
    //console.log(await bcrypt.compare(password, hash))
}

const comparePassword = async (password) => {
    const res = await bcrypt.compare(password, hash)
    return res
}
//https://flaviocopes.com/javascript-bcrypt/
module.exports.hashPassword = hashPassword;
module.exports.comparePassword = comparePassword;