import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import axios from "axios";
import url from "./../../data/port.json"

const Detail = () =>{

    const params = useParams();
    const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
    const [detailData, setDetailData] = useState({});

    const findDatailData = async () =>{
        return await axios.get(url.url + `/posts/${params.id}/find`, {
            headers: {
                accessToken: cookies.userData.accessToken
            }
        })
    }

    useEffect(()=> {
        console.log(params.id)
        findDatailData().then(res => {
            // console.log(res.data)
            setDetailData(res.data)
        })
    },[])
    return (
        <div className="album">
            <div className="container">
                <div className="card mb-3">
                    <div  className="card-img-top" style={{textAlign:"center"}}>
                    <img src={detailData.img} alt="movie" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Movie Img</h5>
                        <p className="card-text">Img Example</p>
                        <p className="card-text">
                            <small className="text-muted">{detailData.img}</small>
                        </p>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <div className="card">
                        <p className="card-body">
                            {detailData.title}
                        </p>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <div className="card">
                        <p className="card-body">
                            {detailData.content}
                        </p>
                    </div>
                </div>
                <button type="button" onClick={() => {
                    window.history.back()
                }} className="btn btn-outline-danger">뒤로가기</button>
            </div>
        </div>  
    );
}

export default Detail;