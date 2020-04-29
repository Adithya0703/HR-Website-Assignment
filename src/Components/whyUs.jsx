import React from "react";
import FAwsm from "./FontAwsm"
function WhyUs() {
    return (
        <div className="whyUs">
            <div className="container">
                <h1>WHY US?</h1>
            </div>
            <div class="container">
                <div className="row">
                    <FAwsm msg="fas fa-mobile  fa-5x" />
                    <FAwsm msg="fas fa-comments fa-5x" />
                    <FAwsm msg="fas fa-dollar-sign fa-5x " />
                </div>
            </div>
        </div>

    )
}

export default WhyUs