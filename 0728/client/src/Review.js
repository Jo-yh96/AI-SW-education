import reivewData from './data/review.json';

const Review = () => {
    return(
        <main>
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Movie</h1>
                    <p className="lead text-muted">
                        영화에 대한 리뷰를 보여주고 싶으신가요?<br/>
                        바로 여기에 추가에 주세요! 삭제 수정도 가능!!
                    </p>
                    <p>
                        <button className="btn btn-primary my-2 m-1">Create Review</button>
                    </p>
                </div>
            </div>
        </section>
        <div className="album py-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                        reivewData.map((it, index) =>(
                            <div className="col" key={index}>
                                <div className="card shadow-sm">
                                    <div className='card-img-top' style={{textAlign:"center"}}>
                                        <img className="bd-placeholder-img" width="50%" height="225" 
                                            xmlns="http://www.w3.org/2000/img" role="img" src={it.img} aria-label="Placeholder: Thumbnail" 
                                            preserveAspectRatio="xMidYMid slice" focusable="false" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{it.content.substring(0,((it.content).length / 2))}
                                            <a style={{color:'blue'}}>&nbsp;&nbsp;&nbsp;&nbsp;...상세보기</a>
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </main>
    );
}

export default Review;