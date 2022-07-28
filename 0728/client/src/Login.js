import { useEffect, useState } from "react";
import SignInForm from "./pages/user/SignInForm";
import SignUpForm from "./pages/user/SignUpForm";


const Login = () => {

    const [view, setView] = useState({
        signIn: false,
        signUp: false
    });

    const [signInData, setSignInData] = useState({
        email: "",
        password: ""
    })

    const [signUpData, setSignUpData] = useState({
        email: "",
        password: "",
        rePassword: "",
        name: ""
    })

    const onChangeSignInData = (e) => {
        setSignInData({
            ...signInData,
            [e.target.name]: e.target.value
        })
    }

    const onChangeSignUpData = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=> {
        console.log(signUpData)
    },[signUpData])

    return (
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
                        <button onClick={() => {
                            setView({
                                signIn: true,
                                signUp: false
                            })
                        }} className="btn btn-primary my-2 m-1">로그인</button>
                        <button onClick={() => {
                            setView({
                                signIn: false,
                                signUp: true
                            })
                        }} className="btn btn-secondary my-2 m-1">회원가입</button>
                    </p>
                </div>
                </div>
            </section>
            {
                view.signIn ? (<SignInForm signInData={signInData} onChangeSignInData={onChangeSignInData} />) : (<></>)
                
            }
            {
                view.signUp ? (<SignUpForm signUpData={signUpData} onChangeSignUpData={onChangeSignUpData} />) : (<></>)
            }
        </main>
    );
}

export default Login;