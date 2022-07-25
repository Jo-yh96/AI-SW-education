const findPw = () => {
    if(!$("#email").val()){
        alert("이메일을 입력해주세오.");
        $("#email").focus();
        return;
    }

    let findForm = $("#findForm").serialize();

    $.ajax({
        type: "POST",
        url:"http://localhost:8080/user/find/password",
        data: findForm,
        success: (res) => {
            console.log(res)
        },error:(error) => {
            console.log(error)
        }
    })
}