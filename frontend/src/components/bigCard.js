import React from 'react'
import {Link} from 'react-router-dom'
const BigCard = (props) => {
  return (
    <div class="card">
        <div class="card-body ">
            <p class="card-text">
                {props.name}
                {props.tags}
                {props.rating}
                {props.link}
                <h4>line1</h4>
                <h4>line1</h4>
                <h4>line1</h4>
                <h4>line1</h4>
            </p>
            <Link to="/" class="btn btn-primary">Approve</Link>
            <Link to="/" class="btn btn-danger">Reject</Link>
        </div>
    </div>
  )
}

export default BigCard
