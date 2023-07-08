import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Index = () => {
    // const { alert, createAlert } = useContext(AlertContext);
    const [credentials, setCredentials] = useState({ videoLink: "", board: "", rating: "", topic: "", subject: "", lesson: "" , grade: ""});
    const changeHandler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        console.log(e.target.name, e.target.value)
    }
    const handleSubmit = (e) => {
        console.log()
        e.preventDefault();
        console.log(credentials);
        if (credentials.cpassword !== credentials.password) {
            return;
        }
        // if (credentials)
    }
    return (
        <div>
            <form>
                <div className="form-group my-2">
                <label htmlFor="exampleFormControlInput1">Video Link</label>
                <input name="videoLink" required={"true"} type="videoLink" onChange={changeHandler} value={credentials.videoLink} className="form-control" id="videoLink" aria-describedby="emailHelp" placeholder="Video Link" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="exampleFormControlInput1">Board</label>
                    <input name="board" required={"true"} type="board" onChange={changeHandler} value={credentials.board} className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Education Board" /></div>
                <div className="form-group my-2">
                    <label htmlFor="exampleFormControlSelect1">Grade</label>
                    <select onChange={changeHandler} className="form-select" name="grade" id="grade" aria-label=".form-select-lg example" value={credentials.grade}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    </select>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="exampleFormControlInput1">Subject</label>
                    <input name="subject" required={"true"} type="subject" onChange={changeHandler} value={credentials.subject} className="form-control" id="subject" aria-describedby="emailHelp" placeholder="Subject" /></div>
                <div className="form-group my-2">
                    <label htmlFor="exampleFormControlInput1">Lesson</label>
                    <input name="lesson" required={"true"} type="lesson" onChange={changeHandler} value={credentials.lesson} className="form-control" id="lesson" aria-describedby="emailHelp" placeholder="Lesson" /></div>
                <div className="form-group my-2">
                    <label htmlFor="exampleFormControlInput1">Topic</label>
                    <input name="topic" required={"true"} type="topic" onChange={changeHandler} value={credentials.topic} className="form-control" id="topic" aria-describedby="emailHelp" placeholder="Topic" /></div>
                <div className="form-group my-2">
                    <label htmlFor="exampleFormControlSelect1">Rating</label>
                    <select onChange={changeHandler} className="form-select" name="rating" id="rating" aria-label=".form-select-lg example" value={credentials.rating}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <button type="button" onClick={handleSubmit} className="btn btn-primary my-4">Submit</button>
            </form>
        </div>
    )
}

export default Index