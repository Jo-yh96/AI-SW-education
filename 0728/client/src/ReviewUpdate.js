import Update from "./pages/review/Update";

const ReviewUpdate = () => {
    return (
        <main>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Movie</h1>
                    <p className="lead text-muted">
                        영화에 대한 리뷰를 보여주고 싶으신가요?<br/>
                        바로 여기에 추가에 주세요!<br />
                        Update Page
                    </p>
                    <p>
                    </p>
                </div>
                </div>
            </section>
            <Update />
        </main>
    );
}

export default ReviewUpdate;