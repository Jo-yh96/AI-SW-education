import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Review from "./Review";
import ReviewDetail from "./ReviewDetail";
import ReviewCreate from "./ReviewCreate";
import ReviewUpdate from "./ReviewUpdate";
import KakaoCallBack from "./pages/user/kakao/KakaoCallBack";
import SocialSignUp from "./pages/user/SocialSignUp";

import Store from "./app/Store";
import {Provider} from "react-redux"

function App() {
  return (
    <>
      <Provider store={Store}>
        <Header />
        <Routes>
          <Route path="/" element={<Login/>} /> {/*url -> http://localhost:3000/ */}
          <Route path="ouath">
              <Route path="kakao/callback" element={<KakaoCallBack/>} />
              <Route path="signUp" elemen={<SocialSignUp />} />
          </Route>
          <Route path="review" > {/*url -> http://localhost:3000/review */}
            <Route path="list" element={<Review/>}/> {/*url -> http://localhost:3000/review/list */}
            <Route path="create" element={<ReviewCreate/>} /> {/*url -> http://localhost:3000/review/create */}
            <Route path=":id">
              <Route path="detail" element={<ReviewDetail/>} /> {/*url -> http://localhost:3000/review/:id/detail */}
              <Route path="update" element={<ReviewUpdate/>} /> {/*url -> http://localhost:3000/review/:id/update */}
            </Route>
          </Route>
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
