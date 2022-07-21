const signUp = () => {
    if(!$("#email").val()){
        alert("이메일을 입력해주세요")
        $("#email").focus()
        return;
    }

    if(!$("#password").val()){
        alert("비밀번호를 입력해주세요")
        $("#password").focus()
        return;
    }

    if(!$("#rePassword").val()){
        alert("비밀번호 확인을 입력해주세요")
        $("#rePassword").focus()
        return;
    }

    if(!$("#name").val()){
        alert("이름을 입력해주세요")
        $("#name").focus()
        return;
    }

    if($("#password").val() !== $("#rePassword").val()){
        alert("비밀번호와 비빌먼호 확인이 일치하지 않습니다.");
        $("#password").val("");
        $("#rePassword").val("");
        $("#password").focus();
        return;
    }

    let signUpData = $("#signUpForm").serialize();

    $.ajax({
        type: "POST",
        url:"http://localhost:8080/user/signUp",
        data: signUpData,
        success: (res) => {
            alert(res.result);
            location.href="/0719-22/view/user/logIn.html";
        }, error: (err) => {
            console.log(err)
            alert(err.responseJSON.error);
            $("#email").val("");
            $("#password").val("");
            $("#rePassword").val("");
            $("#name").val("");
            $("#email").focus();
        }
    });
}
