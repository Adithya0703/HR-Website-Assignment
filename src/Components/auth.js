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

export default handleClick;