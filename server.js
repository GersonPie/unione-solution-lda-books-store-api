require('dotenv').configDotenv();
const express = require('express');
const cors = require('cors')
const {systemEndPoint} = require('./end-points/systemEndPoint')
const  {uploadMidleware, system_middleware} = require('./middleware/system-middleware')
const {cardsDataMiddleware} = require('./middleware/cards-data-middleware')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { sendlog, upload } = require('./Config/system-functions');
const { booksEndpoint } = require('./end-points/booksEndPoint');
const { getBooks } = require('./middleware/books-middleware');
const { categoriesEndpoint } = require('./end-points/categoriesEndPoint');
const { getCategories } = require('./middleware/categories-middleware');




////////////////////////////////////////////////////
const api = express();
const PORT = process.env.PORT || 3000;
api.use(cors());
api.use((req,res,next)=>{sendlog(req.path + ' accessed \n'), next()});
api.use(bodyParser.urlencoded({ extended: true }));
api.use('/files', express.static('uploads'))
///////////////////////////////////////////////////


//@@@@@@@@@@@@@@[ ENDPOINTS ]@@@@@@@@@@@@@@@@@@@@@
api.get(systemEndPoint.hello, system_middleware)
api.get(systemEndPoint.getCards, cardsDataMiddleware)
api.post(systemEndPoint.upload, upload.single('file'),uploadMidleware)
api.get(booksEndpoint.getbooks, getBooks)
api.get(categoriesEndpoint.getcategories, getCategories)


console.log('routes: ',systemEndPoint.hello,booksEndpoint.getbooks,systemEndPoint.getCards,systemEndPoint.upload, categoriesEndpoint.getcategories)
//////////////////////////////////////////////////



/////////////////////////////////////////////////
function start_server(){
  api.listen(PORT, function(){
    sendlog('system started')
    console.log(`listenning to requests on ${PORT}`);
  })
}

async function connect_db(){
  try{
    mongoose.connect('mongodb+srv://abc-online-api:f8VFsOuTkWz0aPkw0@cluster0.bcjklze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    sendlog('database connected')
    console.log('database connected')
  }

  catch(err){
    sendlog('error connecting to database, ' + err)
    console.log(err)
  }
 
  
}
/////////////////////////////////////////////////////
start_server()
//connect_db()
////////////////////////////////////////////////////
////////////// UNIONE SOLUTION LDA ////////////////
//////////////////////////////////////////////////