
const users = require('../Models/userschema')

const jwt = require('jsonwebtoken')

exports.register = async(req,res)=>{
    console.log('User controller working successfully');

    const {username,email,password} = req.body
   try{
    const existuser = await users.findOne({email});

    if(existuser){
        res.status(406).json("Account already exists... Please login")
    }
    else{
        const newuser = new users({
            username,
            email,
            password
            
        })
        await newuser.save()
        res.status(200).json(newuser)
    }
}
    catch(err){
        res.status(401).json("Request failed")
    }
}

exports.login = async(req,res)=>{


    const {email,password} =req.body

   try {const existuser  =await users.findOne({email,password})

    if(existuser){
       const token = jwt.sign({userID: existuser._id},"supersecretkey")
        res.status(200).json({
            existuser,
            token
        })
    }else{
        res.status(404).json('invalid username or password')
    }
    }catch(err){
        res.status(401).json('login request failed :',err)

    }
}