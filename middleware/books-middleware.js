const { sendlog } = require("../Config/system-functions")
const { BOOKS } = require("../database-proto/database")

const getBooks = (req,res,next)=>{
    sendlog('Function - getBooks(): starting...')

    
    
    res.status(200).json(BOOKS)
}

module.exports = {
    getBooks
}