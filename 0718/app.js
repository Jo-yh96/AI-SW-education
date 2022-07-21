const mongooese = require('mongoose')

const { Post1 } = require("./models")

mongooese.connect("mongodb://localhost:27017/myapp")

mongooese.connection.on("connected", () => {
    console.log("연결 완료");
});

mongooese.connection.on("disconnected", () => {
    console.log("연결 끊김");
});

async function main() {
    await Post1.create({
        title: '제목3',
        content: '내용3'
    })
}

// main();

// async function findList() {
//     return await Post1.find({})
// }

// findList().then((res) => {
//     console.log(res);
// });

// async function findItem() {
//     return await Post1.find({ title: '제목2' });
// }

// findItem().then((res) => {
//     console.log(res);
// });

async function changeItem() {
    return await Post1.findByIdAndUpdate({
        _id: '62d4ffab708090f3a68901ee'
    },{
        title: '1250'
    });
}

changeItem().then((res) => {
    console.log(res);
})


// async function deleteFun() {
//     return await Post1.deleteOne({
//         _id: "62d4fe3d29850277fba47485"
//     })
// }

// deleteFun().then((res) => {
//     console.log(res);
// })