const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/config");

module.exports = async (req,res,next) => {
    const accessToken = req.header("accessToken");

    if(accessToken === null || accessToken === undefined){
        res.status(403).json({status:false, message:"권한 오류"})
    }else{
        try{
            const tokenInfo = await new Promise((resolve, reject) => {
                jwt.verify(accessToken,jwtConfig.secret,(err,decode) =>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(decode);
                    }
                });
            });

            req.tokenInfo = tokenInfo;
            next();
        }catch(e) {
            res.status(403).json({status:false, message:"권한 오류"})
        }
    }
};