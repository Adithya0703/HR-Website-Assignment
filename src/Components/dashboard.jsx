import React, { useState } from "react"
import axios from "axios"
import uid from "uid"
function Dashboard(props)
{
    const [dataItems,setData] = useState([])
    axios.get("http://localhost:5000/data").then(res=> setData(res.data) )

    return (
        <div className="adminDiv">
        <h2>The application details are below</h2>
            <div style={{margin:"auto"}} className="container dataContainer">
            <div  className="row">

                { dataItems.map(data =>
                    <div className="col-lg-6 data">
                        <div className="inner">
                            <p key={uid(11)} > Full Name : {data.fullName} </p>
                            <p key={uid(11)} > Email : {data.email} </p>
                            <p key={uid(12)}>  Phone Number: {data.number} </p>
                            <p key={uid(12)}>  Current Role: {data.role} </p>
                            <p key={uid(12)}>  Applying For: {data.pos} </p>
                            <p key={uid(12)}>  About me:  {data.about} </p>
                            <p></p>
                        </div>
                    </div>
                    
             )}
             </div>
        </div>
        <div className="logoutDiv">
        <button className="logout" onClick={props.rem}>Logout</button>
        </div>
        </div>
    )
}
export default Dashboard