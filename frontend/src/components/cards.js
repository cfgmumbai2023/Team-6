import React from 'react'
import {Link} from 'react-router-dom'
import { Navigate,useNavigate } from 'react-router-dom'
const Card = (props) => {
    const handleClick=(link)=>{
        console.log(link);
        window.location.replace(link);
    };
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Topic</th>
      <th scope="col">Grade</th>
      <th scope="col">View</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row">1</th>
      <td>{props.pep.name}</td>
      <td>{props.pep.class}</td>
      <td><a href={props.pep.link} class="btn btn-primary ">View</a></td>
      <td>
        <Link to="/" class="btn btn-primary mx-3">Approve</Link>
        <Link to="/" class="btn btn-danger">Reject</Link>
      </td>
    </tr>
  </tbody>
</table>
  )
}

export default Card
