import axios from "axios";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux"
import url from "./../../data/port.json"
import { useCookies } from "react-cookie";
import $ from "jquery";
import { useNavigate, useParams } from "react-router-dom";
const Update = () =>{

    const navigate = useNavigate();
    const params = useParams();

    // const [shortId, setShortId] = useState("")
    const [cookies,setCookie, removeCookie] = useCookies(["userData"]);
    const [updateData, setUpdateData] = useState({});


    const findGetReviewData = async () => {
        return await axios.get(url.url + `/posts/${params.id}/find`, {
            headers:{
                accessToken:cookies.userData.accessToken
            }
        })
    }

    const onChangeUpdateData = (e) => {
        setUpdateData({
            ...updateData,
            [e.target.name]: e.target.value
        })
    }

    const onClickChangeUpdateData = () => {
        if(updateData.img === ""){
            alert("이미지 경로를 입력해주세오.");
            $("#img").focus();
            return;
        }
        if(updateData.title === ""){
            alert("제목를 입력해주세오.");
            $("#title").focus();
            return;
        }
        if(updateData.content === ""){
            alert("내용을 입력해주세오.");
            $("#content").focus();
            return;
        }
        sendUpdateData().then(res => {
            console.log(res)
            alert(res.data.result);
            navigate("/review/list")
        })
    }

    const sendUpdateData = async () => {    
        return await axios.post(url.url + `/posts/${params.id}/update`, updateData, {
            headers: {
                accessToken:cookies.userData.accessToken
            }
        })
    }

    // let getReduxShortId = useSelector(state => state.id.value);

    useEffect(()=>{
        // if(getReduxShortId !== ""){
        //     setShortId(getReduxShortId)
        // }
        findGetReviewData(params.id).then(res => {
            console.log(res);
            setUpdateData(res.data)
        })
    },[])
    return (
        <div className="album">
            <div className="container">
                <div className="card mb-3">
                    <div  className="card-img-top" style={{textAlign:"center"}}>
                    <img src={updateData.img} alt="movie" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Movie Img</h5>
                        <p className="card-text">Img Example</p>
                        <p className="card-text">
                            <small className="text-muted">url</small>
                        </p>
                        <input type="text" className="form-control" name="img" id="img" defaultValue={updateData.img} onChange={onChangeUpdateData} disabled placeholder="사진 url를 입력해주세요" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" defaultValue={updateData.title} onChange={onChangeUpdateData} id="title" placeholder="제목을 입력해주세요" />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <textarea className="form-control" id="content" defaultValue={updateData.content} onChange={onChangeUpdateData} name="content" rows="3"></textarea>
                </div>
                <button type="button" className="btn btn-outline-success" onClick={onClickChangeUpdateData} style={{marginRight:"2%"}}>수정</button>
                <button type="button" onClick={() => {
                    window.history.back()
                }} className="btn btn-outline-danger">뒤로가기</button>
            </div>
        </div>  
    );
}

export default Update;