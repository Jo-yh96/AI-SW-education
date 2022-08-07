import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import $ from "jquery"
import axios from "axios";
import url from "./../../data/port.json"
import { useNavigate } from "react-router-dom";
const Create = () =>{

    const navigate = useNavigate();
    const [cookies, setCookies, removeCookie] = useCookies(["userData"]);

    const [createReivew,setCreateReivew] = useState({
        img: "",
        title: "",
        content: "",
        email: ""
    });

    const onChangeCreateReivew = (e) => {
        setCreateReivew({
            ...createReivew,
            [e.target.name] : e.target.value
        })
    }

    const onClickCreateReivew = () => {
        if(createReivew.img === ""){
            alert("이미지 경로를 입력해주세요");
            $("#img").focus()
            return;
        }
        if(createReivew.title === ""){
            alert("제목를 입력해주세요");
            $("#title").focus()
            return;
        }
        if(createReivew.content === ""){
            alert("내용를 입력해주세요");
            $("#content").focus()
            return;
        }
        if(createReivew.email === ""){
            alert("이메일을 입력해주세요");
            $("#email").focus()
            return;
        }

        sendCreateReivew().then(res => {
            console.log(res);
            alert(res.data.result)
        }).catch(e => {
            console.log(e);
        })
    }

    const sendCreateReivew = async () => {
        return await axios.post(url.url + "/posts",createReivew,{
            headers:{
                accesssToken: cookies.userData.accesssToken
            }
        });
    }

    useEffect(()=> {
        console.log(createReivew);
    },[createReivew])


    return (
        <div className="album">
            <div className="container">
                <div className="card mb-3">
                    <div  className="card-img-top" style={{textAlign:"center"}}>
                        {
                            createReivew.img !== "" ? (<img src={createReivew.img} alt="..." />) : (<></>)
                        }
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Movie Img</h5>
                        <p className="card-text">Img Example</p>
                        <input type="text" className="form-control" name="img" onChange={onChangeCreateReivew} id="url" placeholder="사진 url를 입력해주세요" />
                        <p className="card-text">
                            <small className="text-muted">url</small>
                        </p>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" onChange={onChangeCreateReivew} id="title" placeholder="제목을 입력해주세요" />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <textarea className="form-control" id="content" onChange={onChangeCreateReivew} name="content" rows="3"></textarea>
                </div>
                <button type="button" className="btn btn-outline-success" style={{marginRight:"2%"}} onClick={onClickCreateReivew}>생성</button>
                <button type="button" className="btn btn-outline-danger">뒤로가기</button>
            </div>
        </div>  
    );
}

export default Create;