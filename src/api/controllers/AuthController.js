const UserModel = require("./../models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const User = await UserModel.findOne({
            where: {
                username : req.body.username
            }
        });
        const match = await bcrypt.compare(req.body.password, User.password);
        if(!match) return res.status(401).json({message: "Wrong username or password"});
        const id = User.id
        const username = User.username;
        const accessToken = jwt.sign({id, username}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn : '1036800s'
        });

        res.status(200).json({
            code:1,
            message: "Successfully get data User",
            data: accessToken
        })
        
    } catch (error) {
        console.log({error});
        res.status(404).json({message: "Username not exist"})
    }
}


module.exports = { login }