const {sendlog} = require('../Config/system-functions')
require('dotenv').configDotenv()
const system_middleware = (req,res,next)=>{
    res.json({message:'Hello World'});
}
const uploadMidleware = (req,res)=>{
  sendlog('file uploaded: ' + req.file.originalname)
  res.json({link: `http://localhost:${process.env.PORT}/files/${req.file.filename}`})
}

module.exports = {system_middleware,uploadMidleware}