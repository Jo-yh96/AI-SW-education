import $ from "jquery";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import port from "./../../data/port.json";
import { useCookies } from "react-cookie";


const SocialSignUp = () => {

    const [cookiesAuth, setCookieAuth, removewCookieAuth]= useCookies(["auth"]);
    const emailRef = useRef();
    const [errorMessage, setErrorMessage] = useState("")
    const [signUpData, setSignUpData] = useState({
        email: "",
        password: "",
        rePassword: "",
        name: ""
    });

    const onChangeSignUpData = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]:[e.target.value]
        })
    }

    useEffect(()=>{
        console.log(cookiesAuth.auth);
        setSignUpData({
            ...signUpData,
            email: cookiesAuth.auth.kakao_accout.email,
            name: cookiesAuth.auth.kakao_accout.profile.nickname
        })
    },[]);

    const onClickSignUpButton = () => {
        if(signUpData.email === ""){
            alert("이메일을 입력하세요");
            emailRef.current.focus();
            return;
        }
        if(signUpData.password === ""){
            alert("비밀번호를 입력하세요");
            $("#password").focus();
            return;
        }
        if(signUpData.rePassword === ""){
            alert("비밀번호 확인을 입력하세요");
            $("#rePassword").focus();
            return;
        }
        if(signUpData.name === ""){
            alert("이름을 입력하세요");
            $("#name").focus();
            return;
        }

        if(signUpData.password !== signUpData.rePassword){
            alert("비밀번호가 같지 않습니다. 다시 입력 해주세요");
            setSignUpData({ 
                ...signUpData,
                password:"",
                rePassword:""
            });
            $("#password").focus();
            return;
        }
        snedSignUpData().then(res => {
            console.log(res.data)
            alert(res.data.result);
            window.location.reload();
        }).catch(e => {
            console.log("e",e)
            console.log("e.response.data.fail",e.response.data.fail)
            console.log("e.response.data.error",e.response.data.error)
            setErrorMessage(e.response.data.error)
        })
    }

    const snedSignUpData = async () => {
        return await axios.post(port.url + "/user/signUp",signUpData)
    }

    return (
        <main>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Movie</h1>
                    <p className="lead text-muted">
                        영화에 대한 리뷰를 보여주고 싶으신가요?<br/>
                        바로 여기에 추가해 주세요!<br />
                        Create Page
                    </p>
                    <p>
                    </p>
                </div>
                </div>
            </section>
            <div className="album">
                <div className="container">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" disabled ref={emailRef} value={signUpData.email} onChange={onChangeSignUpData} className="form-control" name="email" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" value={signUpData.password} onChange={onChangeSignUpData} className="form-control" name="password" id="password"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rePassword" className="form-label">rePassword</label>
                            <input type="password" value={signUpData.rePassword} onChange={onChangeSignUpData} className="form-control" name="rePassword" id="rePassword"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" disabled value={signUpData.name} onChange={onChangeSignUpData} className="form-control" name="name" id="name"/>
                        </div>
                        <div className="mb-3">
                            <p className="text-danger">
                                {errorMessage}
                            </p>
                        </div>
                        <button type="button" onClick={onClickSignUpButton} className="btn btn-primary">회원가입</button>
                    </form>
                </div>
            </div>
        </main>
    )
}
export default SocialSignUp;