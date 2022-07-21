$(document).ready(()=> {
    let header=`<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <img src="https://cdn-api.elice.io/api/file/45b1f85fe9434e2fb8eeed071570c7e0/AI%20%EC%96%91%EC%9E%AC%20%ED%97%88%EB%B8%8C_LOGO_PNG.png?se=2100-12-31T00%3A00%3A00Z&sp=rt&sv=2020-10-02&sr=b&sig=/kYDfaiPpbvH5ZzI0RjyWDzSh5GZmBxjaJQCiH6EsCw%3D" width="90px">
        </svg>
        
    </a>

    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/0719-22/view/index.html" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="/0719-22/view/posts/list.html" class="nav-link px-2 link-dark">List</a></li>
    </ul>

    <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2" onclick=location.href="/0719-22/view/user/logIn.html">Login</button>
        <button type="button" class="btn btn-primary" onclick=location.href="/0719-22/view/user/signUp.html">Sign-up</button>
    </div>
    </header>`;
    $(".container").prepend(header)
})