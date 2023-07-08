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
            "description":"sfgtyui",
            "name" : "ahha",
            "approved" : "jhfrgf",
            "class" : "gcbyus",
            "link" : "www.google.com",
            "tag" : "ejbgucrsngnuk"
        },
        {
            "description":"sfgtyui",
            "name" : "ahha",
            "approved" : "jhfrgf",
            "class" : "gcbyus",
            "link" : "www.google.com",
            "tag" : "ejbgucrsngnuk"
        },
        {
            "description":"sfgtyui",
            "name" : "ahha",
            "approved" : "jhfrgf",
            "class" : "gcbyus",
            "link" : "www.twitter.com",
            "tag" : "ejbgucrsngnuk"
        },
        {
            "description":"sfgtyui",
            "name" : "ahha",
            "approved" : "jhfrgf",
            "class" : "gcbyus",
            "link" : "www.google.com",
            "tag" : "ejbgucrsngnuk"
        }
    ]
    return (
        <div>
            {data.map((temp)=><Card pep={temp}/>)}
        </div>
    )
}

export default Index