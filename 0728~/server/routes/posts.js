const {Router} = require("express");
const {Post, User} = require("./../models");
const asyncHandler = require("../utils/async-handler")

const router = Router();


router.post("/", async (req,res,next) => {
    const {img, title, content, email} = req.body;
    // console.log(req.body);
    try {
        const authData = await User.findOne({email})
        await Post.create({
            img,
            title,
            content,
            auth: authData
        });
        res.json({
            result:"저장이 완료되었습니다."
        })
    }catch(e) {
        next(e);
    }
})

router.get("/",async (req,res,next) => {
    // let page = 1;
    // let parPage = 6;
    if(req.query.page < 1) {
        next("Please enter a number greater then 1"); //page가 1보다 작다면 오류처리
        return;
    }
    const page = Number(req.query.page || 1); // req.query.page가 null or undifind면 1를 넣어라
    const parPage = Number(req.query.parP || 6);
    const total = await Post.countDocuments({});

    const posts = await Post.find({})
        .sort({createAt: -1}) //마지막으로 작성된 게시글을 첫번째 인덱스로 가져옴
        .skip(parPage * (page -1)) //ex-> 2페이지라면 5번부터
        .limit(parPage) //6개씩 가져와줘
        .populate("author")
    const totalPage = Math.ceil(total / parPage)
    // const posts = await Post.find({}).populate("author");
    res.json({posts, totalPage});
});

router.get("/:shortId/delete",async (req,res,next) => {
    const {shortId} = req.params;
    try {
        await Post.deleteOne({shortId});
        res.json({
            result: "삭제가 완료되었습니다"
        })
    }catch(e){
        next(e);
    }
});

router.get("/:shortId/find", async (req,res,next) => {
    let {shortId} = req.params;
    try{
        let data = await Post.findOne({shortId})
        res.json(data);
    }catch(e){
        next(e)
    }
});

router.post("/:shortId/update", async (req,res,next) => {
    let {shortId} = req.params;
    let {title, content} = req.body;
    try {
        await Post.updateOne({shortId},{
            title,
            content
        });

        res.json({
            result: "수정이 완료되었습니다."
        })
    }catch(e) {
        next(e);
    }
});

module.exports = router;