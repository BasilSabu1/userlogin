


const mangoose = require('mongoose')

const connectionstring = process.env.DATABASE

mangoose.connect(connectionstring).then(()=>{
    console.log('success connected');
}).catch((err)=>{
    console.log('connection failed due to ',err);
})