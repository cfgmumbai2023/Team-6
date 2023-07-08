import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Index = () => {
    // const { alert, createAlert } = useContext(AlertContext);
    const [credentials, setCredentials] = useState({ firstName: "", lastName: "", cpassword: "", email: "", password: "", role: "" });
    const changeHandler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        console.log(e.target.name, e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.cpassword !== credentials.password) {
            return;
        }
        // if (credentials)
    }
    return (
        <div>
            <form>
                <div className="form-group my-2">
                    <label htmlFor="exampleInputEmail1">First Name</label>
                    <input name="firstName" required={"true"} type="firstName" onChange={changeHandler} value={credentials.firstName} className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter first name" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="exampleInputEmail1">Last Name</label>
                    <input name="lastName" required={"true"} type="lastName" onChange={changeHandler} className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Enter last name" value={credentials.lastName} />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input required={"true"} type="email" onChange={changeHandler} className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" value={credentials.email} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input required={"true"} type="password" onChange={changeHandler} className="form-control" name="password" id="password" placeholder="Password" value={credentials.password} />
                </div>
                <div className="form-group my-2">
                    <label required={"true"} htmlFor="exampleInputPassword1">Retype password</label>
                    <input type="password" onChange={changeHandler} className="form-control" id="cpassword" name="cpassword" placeholder="Retype password" value={credentials.cpassword} />
                </div>
                <label htmlFor="exampleInputPassword1 mt-3">Select Role</label>
                <select onChange={changeHandler} className="form-select" name="role" id="role" aria-label=".form-select-lg example" value={credentials.role}>
                    <option >Open this select menu</option>
                    <option value="1">Admin</option>
                    <option value="2">Content Creator</option>
                    <option value="3">Student</option>
                </select>
                {credentials.role == 4 && <div className="form-group my-2">
                    <label htmlFor="exampleInputPassword1">School Code</label>
                    <input type="schoolCode" onChange={changeHandler} className="form-control" name="schoolCode" id="schoolCode" placeholder="School Code" value={credentials.password} />
                </div>}
                <button type="submit" className="btn btn-primary my-4">Submit</button>
            </form>
            <div className="text-center">
                <p>Already a member? <Link to="/Login">Login</Link></p>
            </div>

        </div>
    )
}
export default Index;
