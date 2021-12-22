const jwt = require("jsonwebtoken");

async function checkJwtToken(req, res, next){
 try{
 let decodedJwt = jwt.verify(jwtToken, process.env.PRIVATE_JWT_KEY)
 }catch(e){
     res.status(500).json({
         message: e.message,
         error: e
     })
 }
}