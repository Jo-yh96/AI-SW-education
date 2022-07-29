import Create from "./pages/review/Create";

const ReivewCreate = () => {
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
            <Create />
        </main>
    );
}

export default ReivewCreate;