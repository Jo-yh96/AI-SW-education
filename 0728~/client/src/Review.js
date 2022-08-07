// import reivewData from './data/review.json';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import url from "./data/port.json"
import { useCookies } from "react-cookie";

//Redux
import { useDispatch } from "react-redux"
import { setData } from "./app/reducer/Data";

const Review = () => {
    
    const dispatch = useDispatch(); //action을 사용하기위해 값을 보내주는 역할

    const [cookies, setCookie, removeCookie] = useCookies(["userData"])
    const navigate = useNavigate()
    const [reivewData, setReivewData] = useState([]); 
    const [page, setPage] = useState({
        page: 1,     //현재 보고 있는페이지
        totalPage: 0 //전체 페이지 수
    });

    useEffect(()=> { // 렌더링이 되었다면 최초1번만 실행되는 곳
        // if(cookies.userData.accessToken === ""){
        //     navigate("/")
        // }
        getReviewData(page.page);
    },[])

    const getReviewData =  (page) => {
        try{
            axios.get(url.url+`/posts?page=${page}&parPage=6`,{
                headers: {
                    accessToken:cookies.userData.accessToken
                }
            }).then(res => {
                console.log(res);
                setReivewData(res.data.posts)

                setPage({
                    page:page,
                    totalPage:res.data.totalPage
                })
            }).catch(e => {
                console.log(e);
            })
        }catch{
            navigate("/")
        }
    }

    //--------delete--------
    const deleteReview = async (shortId) => {
        return await axios.get(url.url + `/posts/${shortId}/delete`,{
            headers:{
                accessToken:cookies.userData.accessToken
            }
        })
    }
    const onClickDeleteButton = (shortId) => {
        if(window.confirm("삭제 하시겠습니까?")){
            //예
            deleteReview(shortId).then(res => {
                let getNewDeleteAfterData = reivewData.filter((it) => it.shortId !== shortId);
                setReivewData(getNewDeleteAfterData);
            })
        }else{
            //아니요
            return;
        }
    }
    //-------update--------
    const onClickUpdateButton = (shortId) => {
        dispatch(setData(shortId));
        navigate(`/review/${shortId}/update`)
    }
    //--------detail----------
    const onCLickDetailButton = (shortId) =>{
        navigate(`/review/${shortId}/detail`);
    }

    const onCLickPagination = (page) =>{
        getReviewData(page)
    }


    return(
        <main>
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Movie</h1>
                    <p className="lead text-muted">
                        영화에 대한 리뷰를 보여주고 싶으신가요?<br/>
                        바로 여기에 추가해 주세요! 삭제 수정도 가능!!
                    </p>
                    <p>
                    <button onClick={() => { navigate('/review/create') }}
                                className="btn btn-primary my-2 m-1">Create Review</button>
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
                                    <h5 className="card-title" onClick={()=>onCLickDetailButton(it.shortId)}>{it.title}</h5>
                                        <p className="card-text">{it.content.substring(0,((it.content).length / 2))}
                                            <a onClick={()=>{onCLickDetailButton(it.shortId)}} style={{color:'blue'}}>&nbsp;&nbsp;&nbsp;&nbsp;...상세보기</a>
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" onClick={() => {
                                                    onClickDeleteButton(it.shortId);
                                                }} className="btn btn-sm btn-outline-secondary">삭제</button>
                                                <button type="button" onClick={() => {
                                                    onClickUpdateButton(it.shortId)
                                                }} className="btn btn-sm btn-outline-secondary">수정</button>
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
        <div style={{textAlign:"center"}}>
        <nav aria-label="Page navigation example" style={{display:"inline-block"}}>
                <ul className="pagination">
                    {
                        (page.page - 1) < 1 ? (<></>) : (<>
                                        <li className="page-item">
                                            <a className="page-link"  aria-label="Previous" onClick={() => onCLickPagination(page.page - 1)}>
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" onClick={() => onCLickPagination(page.page - 1)}>{page.page - 1}
                                            </a>
                                        </li>
                        </>)
                    }
                    <li className="page-item"><a className="page-link" onClick={() => onCLickPagination(page.page)}>{page.page}</a></li>
                    {
                        (page.page + 1) > page.totalPage ? (<></>) : (<>
                                    <li className="page-item">
                                        <a className="page-link" onClick={() => onCLickPagination(page.page + 1)}>{page.page + 1}</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link"  aria-label="Next" onClick={() => onCLickPagination(page.page + 1)}>
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                        </>)
                    }
                </ul>
            </nav>
        </div>
    </main>
    );
}

export default Review;