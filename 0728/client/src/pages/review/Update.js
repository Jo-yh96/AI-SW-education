const Update = () =>{
    return (
        <div className="album">
            <div className="container">
                <div className="card mb-3">
                    <div  className="card-img-top" style={{textAlign:"center"}}>
                    <img src="https://search.pstatic.net/common?type=o&size=174x246&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220720_283%2F1658284839003UzxoT_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Movie Img</h5>
                        <p className="card-text">Img Example</p>
                        <p className="card-text">
                            <small className="text-muted">url</small>
                        </p>
                        <input type="text" className="form-control" name="url" id="url" placeholder="사진 url를 입력해주세요" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" id="title" placeholder="제목을 입력해주세요" />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <textarea className="form-control" id="content" name="content" rows="3"></textarea>
                </div>
                <button type="button" className="btn btn-outline-success" style={{marginRight:"2%"}}>수정</button>
                <button type="button" className="btn btn-outline-danger">뒤로가기</button>
            </div>
        </div>  
    );
}

export default Update;