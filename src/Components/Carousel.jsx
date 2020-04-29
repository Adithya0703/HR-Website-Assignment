import React from "react"

function Carousel(props) {
    return (
        <div class={"carousel-item " + props.extraClass} >
            <img src={props.src} className={props.name} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem molestiae ex dolore! Eveniet molestiae, natus quam vel nemo,voluptatem ducimus.</p>
        <h5 style={{textAlign:"right"}}>{props.person}</h5>
        </div>
    )
}

export function Controls(props) {
    return (
        <div>
            <a class={props.aClass} href="#carouselExampleControls" role="button" data-slide={props.ds} >
                <span class={props.spanClass} aria-hidden="true"></span>
                <span class="sr-only">{props.type}</span>
            </a>
        </div>
    )
}


export default Carousel