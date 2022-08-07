import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import url from "./../../../data/port.json";

const KakaoCallBack = () => {
    const KAKAO_PARAMS =new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
    const [cookiesAuth, setCookieAuth, removewCookieAuth] = useCookies(["auth"]);

    useEffect(()=> {
        // console.log(KAKAO_PARAMS)
        sendCode().then(res => {
            console.log(res.data);
            if(res.data.login){ //로그인이 되어있는 상태
                setCookie("userData", res.data, {path: "/"})
                navigate("/review/list");
            }else{              //회원가입이 필요한 상태
                setCookie("auth",res.data, {path: "/"})
                navigate("/oauth/signUp")
            }
        }).catch(e => {
            console.log(e);
            navigate("/");
        })
    },[])

    const sendCode = async () => {
        return await axios.get(url.url+`/auth/kakao`,{
            params:{
                code:KAKAO_PARAMS
            }
        });
    }
}

export default KakaoCallBack;