const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error")

const login =async(req, res)=>{
    const {username, password} = req.body
    if(!username || !password){
        throw new CustomAPIError('username or password invalid', 400)
    }

    const id = new Date().getDate();
    
    const token = jwt.sign({id, username}, process.env.JWT_STRING,{expiresIn:'30d'});

    console.log(req)
    res.status(200).json({msg:'user created', token})
}
 
const dashboard =async(req,res)=>{
    const authheader = req.headers.authorization
    if(!authheader){
        throw new CustomAPIError('the authorization token not provided', 401)
    }else{
        if(!authheader.startWith('Bearer ')){
            throw new CustomAPIError('the authorization token not provided', 401)
        }
    }
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:'hello orizma pak', secret: `here is the authorization data ${luckyNumber}`})
}

module.exports ={
    login,
    dashboard
}