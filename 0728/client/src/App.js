import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Review from "./Review";
import ReviewDetail from "./ReviewDetail";
import ReviewCreate from "./ReviewCreate";
import ReviewUpdate from "./ReviewUpdate";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login/>} /> {/*url -> http://localhost:3000/ */}
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
    </>
  );
}

export default App;
