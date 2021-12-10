import React from 'react';
import {Link} from 'react-router-dom'
const Button = (props) =>{
    console.log("dasdas>>>",props.path)
    return <React.Fragment>
            <Link to={`${props.path}`}>
            <button type="button" style={{margin:"35px 10px 10px 0px"}}>{props.content}</button>
            </Link>
        </React.Fragment>
}
export default Button;