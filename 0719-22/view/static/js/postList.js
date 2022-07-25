$(document).ready(()=> {
    getList();
})

const getList = () => {

    $(".postList").empty();

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/posts/",
        headers: {
            accessToken:$.cookie("accessToken")
        },
        success:(res)=> {
            res.map((it,index)=> {
                // console.log(it);
                // console.log(index);
                let listData
                console.log(it.auth)
                if(sessionStorage.getItem("email") === it.auth.email){
                    listData = `<tr>
                    <th scope="row">${index+1}</th>
                    <td>${it.title}</td>
                    <td>${it.auth.name}</td>
                    <td><button type="button" onclick="deletePost('${it.shortId}')" class="btn btn-outline-danger">Delete</button>
                    <button type="button" onclick="updatePost('${it.shortId}')" class="btn btn-outline-warning">Updatae</button></td>
                    </tr>`;
                }else{
                    listData = `<tr>
                <th scope="row">${index+1}</th>
                <td>${it.title}</td>
                <td>${it.auth.name}</td>
                </tr>`;
                }
                $(".postList").append(listData)
            })
        },
        error: (res) => {
            alert(res.responseJSON.message)
            location.href="/0719-22/view/user/login.html";
        }
    });
}

const deletePost = (shortId) => {
    $.ajax({
        type:"GET",
        url:`http://localhost:8080/posts/${shortId}/delete`,
        headers: {
            accessToken:$.cookie("accessToken")
        },
        success:(res) => {
            alert(res.result);
            getList();
        }
    });
}

const updatePost = (shortId) => {

    window.localStorage.setItem("shortId", shortId);
    location.href="updateEdit.html"
}