const SignInForm = () => {
    return (
        <div className="album">
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label for="email1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" id="email1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="password1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="password1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignInForm;