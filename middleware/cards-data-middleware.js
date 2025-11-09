const {sendlog} = require('../Config/system-functions.js')
const {CARDSDATA} = require('../database-proto/database.js')


const cardsDataMiddleware = async (req, res, next) => {
    
    sendlog('getcards/ cards data requested');
    res.json(CARDSDATA)
    sendlog('data fetched:' + CARDSDATA)
    next();
}
module.exports = {cardsDataMiddleware}