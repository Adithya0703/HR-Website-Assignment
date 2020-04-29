import React from "react";
import Li from "./Li";

function Nav() {
    return (

        <nav className="navbar navbar-fixed-top navbar-expand-lg  custom">
            <div className="container">
                <a className="navbar-brand" href="/">Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto w-100 justify-content-end">
                        <Li name="Home" link="/"/>
                        <Li name="Oppurtunities " link="/oppurtunities" />
                        <Li name="Contact Us" link="/contact" />
                        <Li class="log" name="ADMIN PANEL" link="/admin" />
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav