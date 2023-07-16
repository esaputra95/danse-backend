const jwt = require('jsonwebtoken');

const accessToken = function(req, res, next){
    const authHeader = req.headers['authorization'];
    if(authHeader===undefined) return res.send(403);
    const token = authHeader.split(" ")[1];
    if(token==null) return res.send(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
        if(err) return res.send(403);
        next()
    })
    
}

module.exports = {accessToken};