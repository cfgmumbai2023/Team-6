import React from 'react'
import {Link} from 'react-router-dom'
const Card = (props) => {
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
      <td>topic name</td>
      <td>class</td>
      <td><Link to="/" class="btn btn-primary">View</Link></td>
      <td>
        <Link to="/" class="btn btn-primary mx-3">Approve</Link>
        <Link to="/" class="btn btn-danger">Reject</Link>
      </td>
    </tr>
    <tr>
    <th scope="row">1</th>
      <td>topic name</td>
      <td>class</td>
      <td><Link to="/" class="btn btn-primary ">View</Link></td>
      <td>
        <Link to="/" class="btn btn-primary mx-3">Approve</Link>
        <Link to="/" class="btn btn-danger">Reject</Link>
      </td>
    </tr>
    <tr>
    <th scope="row">1</th>
      <td>topic name</td>
      <td>class</td>
      <td><Link to="/" class="btn btn-primary ">View</Link></td>
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
