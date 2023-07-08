import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/cards';
import BigCard from '../../components/bigCard';
const Index = () => {
    // const { alert, createAlert } = useContext(AlertContext);
    const [credentials, setCredentials] = useState({ videoLink: "", board: "", rating: "", topic: "", subject: "", lesson: "" , grade: ""});
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
    const data=[
        {
            "description":"Photosynthesis",
            "name" : "Video 1",
            "approved" : "false",
            "class" : "9",
            "link" : "www.google.com",
            "tag" : "Science "
        },
        {
            "description":"Convex Lens",
            "name" : "Video 2",
            "approved" : "false",
            "class" : "11",
            "link" : "www.google.com",
            "tag" : "Science "
        },
        {
            "description":"Integration",
            "name" : "Video 3",
            "approved" : "false",
            "class" : "9",
            "link" : "www.google.com",
            "tag" : "Maths "
        },
        {
            "description":"Photosynthesis",
            "name" : "Video 4",
            "approved" : "false",
            "class" : "9",
            "link" : "www.google.com",
            "tag" : "Science "
        }
    ]
    return (
        <div>
            {data.map((temp)=><Card pep={temp}/>)}
        </div>
    )
}

export default Index