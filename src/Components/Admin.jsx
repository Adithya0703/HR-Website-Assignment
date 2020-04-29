import React from "react"
import axios from "axios"
import { useEffect } from "react"
import Dashboard from "./dashboard"
const qs = require("qs")


function Admin() {

const [val,setval] = React.useState({
    email : "",
    password : ""
})

const [redirect,setRed] = React.useState(false)
function handleClick(event)
{
    const { email,password } = val

    const cred = {
        email,
        password
    }
    event.preventDefault();
    axios.post("http://localhost:5000/login/admin",qs.stringify(cred)).then(res => 
        {
            console.log(res)
           if(res.data.token)
           {
               localStorage.setItem("login",JSON.stringify({
                   login : true,
                   token : res.data.token
               }))
                setRed(true)
                 storeIt();

           }
          
        }
    
    )
}

function handleChange(event)
{
    const { name, value } = event.target;
    setval(pre => {
        return {
            ...pre,
            [name]: value
        }
    } )
}
function rem(){
    localStorage.removeItem("login")
    setRed(false)
}

useEffect(()=> storeIt(),[])


function storeIt(){
    const store = JSON.parse(localStorage.getItem("login"))
    console.log("here")
    if(store && store.login)
    {
        console.log("OK")
        setRed(true)
    }

}

    return (
        <div >


      {redirect ? (
         <div>
             <Dashboard rem={rem}/>
         </div>
      ) : <div className="adminDiv">
      <h1 style={{textAlign:"center",marginTop:"30px"}}>Please Login to access the Admin Panel</h1>
        <form class="form-signin">
                <input name="email" onChange={handleChange} value={val.email} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />

                <input name="password" onChange={handleChange} value={val.password} type="password" id="inputPassword" className="form-control" placeholder="Password" required />

            <div className="custom-control custom-checkbox mb-3">
            </div>
            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={handleClick} >Sign in</button>
            
        </form>
      </div> }
               </div>
    )

}

export default Admin
