import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import kakaoLoginButtonImg from "./img/kakao_login_large_narrow.png"

const Header = () => {

    const [cookies,setCookie,removeCookie] = useCookies(["userData"]);
    const navigate = useNavigate();

    useEffect(() => {
        if(cookies.userData === undefined){
            navigate("/");
        }
    },[cookies])
    //-------------kakao oauth-------------
    const REST_API_KEY = "bd10390cb7365d5fc49e2a00222efd65";
    const REDIRECT_URI = "http://localhost:3000/ouath/kakao/callback";

    const KAKAO_OAUTH_URI =`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;



    return (
    <header>
        <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                        <h4 className="text-white">About</h4>
                        <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Contact</h4>
                        {/* <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Follow on Twitter</a></li>
                            <li><a href="#" className="text-white">Like on Facebook</a></li>
                            <li><a href="#" className="text-white">Email me</a></li>
                        </ul> */}
                        <h4 className="text-white">Info</h4>
                        {
                            cookies.userData ? (
                                <ul className="list-unstyled">
                                    <li><button className="btn btn-danger" style={{marginBottom: "5%"}} onClick={()=> {
                                            removeCookie("userData",{path:"/"});
                                            navigate("/")
                                        }}>LogOut</button></li>
                                    <li><button className="btn btn-primary">Info</button></li>
                                </ul>) 
                                : 
                                (
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href={KAKAO_OAUTH_URI}>
                                                {/* <img src="/img/kakao_login_large_narrow.png" />  public/img 폴더에서 이미지를 가져옴 */}
                                                <img src={kakaoLoginButtonImg} width="60%"/> {/* src/img 폴더에서 이미지를 가져옴 */}
                                            </a>
                                        </li>
                                        <li><button className="btn btn-primary" onClick={() => navigate("/")}>Login</button></li>
                                    </ul>)
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
                <a href="/review/list" className="navbar-brand d-flex align-items-center">
                    <strong>Movie Review</strong>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
    </div>
    </header>
    )
}

export default Header;