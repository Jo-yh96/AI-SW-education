const SignUpForm = ({signUpData,onChangeSignUpData}) => {
    return (
        <div className="album">
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" value={signUpData.email} onChange={onChangeSignUpData} className="form-control" name="email" id="email" aria-describedby="emailHelp" />
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
                        <label htmlFor="name" className="form-label">Password</label>
                        <input type="text" value={signUpData.name} onChange={onChangeSignUpData} className="form-control" name="name" id="name"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default SignUpForm;