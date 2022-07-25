let shortId;

$(document).ready(() => {
    shortId = localStorage.getItem("shortId");
    // console.log(shortId)

    $.ajax({
        type:"GET",
        url:`http://localhost:8080/posts/${shortId}/find`,
        success: (res) => {
            // console.log(res)
            $("#title").val(res.title);
            $("#content").val(res.content);
        }
    })
})

const updatePost = () => {
    if(!$("#title").val()){
        alert("제목을 입력해주세요.");
        $("#title").focus();
        return;
    }

    if(!$("#content").val()){
        alert("내용을 입력해주세요.");
        $("#content").focus();
        return;
    }

    //form태그 내외 input들을 자동으로 읽어와 queryString형으로 변경해줌
    let formData = $("#updateForm").serialize();
    //?name=name&age=1 => 쿼스스트링
// console.log(formData);
    $.ajax({
        type: "POST",
        url: `http://localhost:8080/posts/${shortId}/update`,
        data: formData,
        headers: {
            accessToken:$.cookie("accessToken")
        },
        success:(res) => {
            alert(res.result);
            location.href="list.html";
            return;
        }
    })
}