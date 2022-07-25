const insertPost= () => {
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
    let formData = $("#insertForm").serialize();
    //?name=name&age=1 => 쿼스스트링
    formData += '&email=' + sessionStorage.getItem("email")
// console.log(formData);
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/posts/",
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