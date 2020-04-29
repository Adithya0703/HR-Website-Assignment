import React from "react"
import { Link } from "react-router-dom";

function Li(props) {
    return (
        <li className="nav-item active">
            <Link class="nav-link custom" className={props.class} to={props.link}> {props.name} </Link>
        </li>
    )

}
export default Li