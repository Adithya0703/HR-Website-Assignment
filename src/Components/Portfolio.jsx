import React from "react";
import Carousel, { Controls } from "./Carousel";
import Brad from "../images/Brad.png"
import Margot from "../images/Margot.png"

function Portfolio() {
    return (
<div>

<h2>What Our Customers Say</h2>


        <div id="carouselExampleControls" class="carousel slide"  data-ride="carousel">
            <div class="carousel-inner">
                <Carousel msg="Hello" src={Brad}  name="Brad"  person="Brad Pitt" extraClass="active" />
                <Carousel msg="Hello" src={Margot} name="Margot" person="Margot Robbie" />
            </div>
            <Controls aClass="carousel-control-prev" ds="prev" spanClass="carousel-control-prev-icon" type="Previous" />
            <Controls aClass="carousel-control-next" ds="next" spanClass="carousel-control-next-icon" type="Next" />
        </div>
        </div>
    )

}


export default Portfolio