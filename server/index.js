
//load .env files to process.env file by default
require('dotenv').config()



// 2) import express to create server
const express = require('express')

//3. import cors
const cors = require('cors')

const router = require('../server/Routes/router')

require('../server/DB/connections')
//4. create server . create an express application. the express() function is a top level function to exported by the express module
const pfserver = express()



//5. use of cors by server
pfserver.use(cors())

//6.returns middleware that only parse to json and converted to javascript object

pfserver.use(express.json())

pfserver.use(router)


//7. create custom port why because by default server runs at 3000

const PORT = 4000 || process.env.PORT


//8 run server

pfserver.listen(PORT,()=>{
    console.log('Succefully Running server at',PORT);
})

pfserver.get('/',(req,res)=>{
    res.send('Request sent successfully')
})