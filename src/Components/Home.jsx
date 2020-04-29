import React from "react"
import Info from "./Info"
import WhyUs from "./whyUs"
import Portfolio from "./Portfolio"
function Home(params) {
    return <div>
        <Info />
        <WhyUs />
        <div className="next">
        <Portfolio />
      </div>

    </div>
    
}

export default Home