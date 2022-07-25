const {Router} = require("express")
const router = Router();
const asyncHandler = require("./../utils/async-handler")
const cryto = require("crypto");
const { User } = require("../models");
const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken")
const jwtConfig = require("../config/config.js");
const nodeMailer = require("nodemailer")

router.post("/signUp",asyncHandler(async (req,res,next)=> {
    const {email, password, name} = req.body;
    let hashPassword =  passwordHash(password)
    const checkEmail = await User.findOne({email});

    if(checkEmail){
        // throw new Error("이미 가입된 이메일 입니다.")
        res.status(500);
        res.json({
            error:"이미 가입된 이메일입니다."
        })
        return;
    }
    await User.create({
        email,
        password: hashPassword,
        name
    });

    res.json({
        result: "회원가입이 완료되었습니다. 로그인을 해주세요"
    })
}))

router.post("/login",asyncHandler(async (req,res,next) => {
    let {email, password} = req.body;
    let hashPassword =  passwordHash(password)
    const checkEmail = await User.findOne({email});

    if(!checkEmail){
        res.status(401);
        res.json({
            fail:"존재하지 않는 이메일입니다."
        })
        return;
    }

    if(hashPassword !== checkEmail.password){
        res.status(401);
        res.json({
            fail:"비밀번호가 틀렸습니다."
        })
        return;
    }
    jwt.sign({
        email: email,
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
                status:true,
                accessToken: token, 
                email:email, 
                name:checkEmail.name
            })
        }
    })    
}))

router.post("/find/password",asyncHandler(async (req,res,next) => {
    let {email} = req.body;
    let user = await User.findOne({email});
    let myEmail = "cho845k@gmail.com";

    let transporter = nodeMailer.createTransport({
        service:"gmail",
        host:"smtp.gmail.com",
        port:587,
        secure: false,
        auth:{
            user: myEmail,
            pass:"ldpldmilwdecoxxo"
        }
    });

    const randomPassword = randomPw();
    const hashRandomPassword = passwordHash(randomPassword);

    await User.findOneAndUpdate({shortId : user.shortid}, {
        password: hashRandomPassword
    })

    let info = await transporter.sendMail({
        from:`"Elice" <${myEmail}>`,
        to: user.email,
        subject: "Rest Password By Elice",
        html:`<b>초기화 비밀번호: ${randomPassword}</b>`
    });

    res.json({result : "이메일을 전송하였습니다."})
}));

const randomPw = () =>{
    return Math.floor(Math.random()*(10**8)).toString().padStart('0',0);
}



const passwordHash = (password) => {
    return cryto.createHash("sha1").update(password).digest("hex")
}

module.exports = router;