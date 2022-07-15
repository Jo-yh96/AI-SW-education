const express = require("express")
const app = express();
const routerNotes = require("./route/note")

app.use(express.json())

app.use("/notes",routerNotes);

app.use((req,res,next)=> {
    res.status(404);

    res.json({
        result:"fail",
        error:`Page not fount ${req.path}`
    })
});

app.use((err, req, res, next) => {
    res.status(500);

    res.json({
        result:"fail",
        error:err.message
    })
});

app.listen(8080, () => {
    console.log("server start")
});