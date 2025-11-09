const { sendlog } = require('../Config/system-functions');
const { categories } = require('../database-proto/database');
const getCategories = async (req, res) => {
    sendlog('getCategories(): categories request received');
    res.json(categories);

}

module.exports = {getCategories};