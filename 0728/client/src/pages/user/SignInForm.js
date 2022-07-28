const SignInForm = ({signInData, onChangeSignInData}) => {
    return (
        <div className="album">
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" value={signInData.email} onChange={onChangeSignInData} className="form-control" name="email" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" value={signInData.password} onChange={onChangeSignInData} className="form-control" name="password" id="password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignInForm;