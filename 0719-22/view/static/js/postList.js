$(document).ready(()=> {
    getList();
})

const getList = () => {

    $(".postList").empty();

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/posts/",
        success:(res)=> {
            res.map((it,index)=> {
                // console.log(it);
                // console.log(index);
                let listData = `<tr>
                <th scope="row">${index+1}</th>
                <td>${it.title}</td>
                <td>elice</td>
                <td><button type="button" onclick="deletePost('${it.shortId}')" class="btn btn-outline-danger">Delete</button>
                    <button type="button" onclick="updatePost('${it.shortId}')" class="btn btn-outline-warning">Updatae</button></td>
                </tr>`;

                $(".postList").append(listData)
            })
        }
    });
}

const deletePost = (shortId) => {
    $.ajax({
        type:"GET",
        url:`http://localhost:8080/posts/${shortId}/delete`,
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