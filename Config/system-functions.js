//import {appendFileSync, mkdirSync, existsSync, rename} from 'node:fs'
const fs = require('fs')
const multer = require('multer')
const LOG_PATH = `./log/${new Date().toLocaleDateString().replace(/\//g, '-')}.txt`
const {appendFileSync, mkdirSync, existsSync, rename} = fs

const system = {
    MODE: process.env.MODE,
}

if(!existsSync('./log')){
    mkdirSync('./log', { recursive: true });
    console.log(`${new Date().toLocaleString()}: log folder was created`);
}

function add_log_history(logMessage) {
    
    if(!existsSync(LOG_PATH)){
        appendFileSync(LOG_PATH, `${new Date().toLocaleDateString()}: Log File Created\n`);
    }
    
    appendFileSync(LOG_PATH, new Date().toLocaleString() + ': ' + logMessage + '\n');
}

const sendlog = (str) => {
    add_log_history(str);
    console.log(new Date().toLocaleString(), str);
}


//upload files functions
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        
        const uniqueName = file.originalname;
        cb(null, uniqueName);
    },
});

const upload = multer({
    storage
});


module.exports = {upload, sendlog, system}