const jwt =require("jsonwebtoken");
module.exports = (req,res,next)=>{
    try{

    // console.log(req);
    const token=req.headers.authorization.split(' ')[1];
    const decodedToken=jwt.verify(token,'name_is_secret');
    req.userData = {
        userId:decodedToken.user_id,
        userName:decodedToken.username,
        userRole:decodedToken.user_role
    };
    // console.log(req.userData);
    next();                                  //used to go to next access after  try works
    }
    catch(error){
        return res.status(401).json({message:'Auth failed'})
    }
}