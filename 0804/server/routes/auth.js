const {Router} = require('express');
const router = Router();
const axios = require('axios');
const {User} = require('./../models');
const jwt = require('jsonwebtoken');
const jwtConfig = require('./../config/config');

router.get("/kakao", async (req,res,next) => {
    const REST_API_KEY = "bd10390cb7365d5fc49e2a00222efd65";
    const REDIRECT_URI = "http://localhost:3000/ouath/kakao/callback";
    const KAKAO_CODE = req.query.code;

    try{
        await axios.post(`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,{
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }).then(getToken => {
            // console.log(getToken.data);
            getKakaoUserData(getToken.data.access_token).then(userData => {
                // console.log(userData)

                checkUserData(userData.data,res);
            })
        })
    }catch(e){
        next(e);
    }
})

const checkUserData = async (userData, res) => {
    const checkEmail = await User.findOne({email: userData.kakao_account.email});

    try{
        if(checkEmail) {
            //로그인 진행
            jwt.sign({
                email: checkEmail.email,
                name: checkEmail.name
            },jwtConfig.secret, {
                expiresIn: "1d", //1y,1d,1h,1m,1s
            },(err,token) => {
                if(err) {
                    res.status(401).json({
                        status:false, 
                        message:"로그인을 해주세요."
                    });
                }else {
                    res.json({
                        login: true,
                        status: true,
                        accessToken: token, 
                        email: checkEmail.email, 
                        name: checkEmail.name
                    })
                }
            }) 
        }else{
            //회원가입 페이지로 보내줌
            userData.login = false;
            res.json(userData)
        }
    } catch(e) {
        console.log(e);
        // next(e);
    }

}

const getKakaoUserData = async (token) => {
    return await axios.get(`https://kapi.kakao.com/v2/user/me`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': `application/x-www-form-urlencoded;charset=utf-8`
        }
    })
}
module.exports = router;