const express = require("express");
const mongoose = require("mongoose");
const postsRouter = require("./routes/posts")
const userRouter = require("./routes/user")
const cors = require("cors")
const bodyParser = require("body-parser")
const authMiddleware = require("./utils/authMiddleware")
const authRouter = require("./routes/auth")

const app = express();

mongoose.connect("mongodb://localhost:27017/myapp")

mongoose.connection.on("connected", () => {
    console.log("DB connect succes");
})

mongoose.connection.on("error", (err) => {
    console.log(err);
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/auth",authRouter);
app.use("/posts",authMiddleware,postsRouter);
app.use("/user",userRouter);

app.listen(8080, ()=>{
    console.log("server open");
})