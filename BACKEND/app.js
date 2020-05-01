const express = require("express")
const bp = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const jwt = require("jsonwebtoken")


const app = express()
app.use(cors())
app.use(bp.urlencoded({ extended: true }));


const connectDB = async () => {
    await mongoose.connect('mongodb+srv://adithya:adi732001@cluster0-gogsk.mongodb.net/resumeDB', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

connectDB()


const AdminSchema = new mongoose.Schema({
    email: String,
    password: String
})

const AdminModel = mongoose.model("Admin", AdminSchema)


const UserSchema = mongoose.Schema({

    fullName: String,
    email: String,
    number: String,
    role: String,
    pos: String,
    about: String
})



const User = mongoose.model("User", UserSchema)

app.post("/form", (req, res) => {
    const { fullName, email, number, role, pos, about } = req.body
    const user = new User({
        fullName,
        email,
        number,
        role,
        pos,
        about
    })

    function ab() {
        user.save().then(res.status(200).json({
            msg: "Alright"
        }
        ));
    }
    ab()
})


app.post("/login/admin",async function (req, res) {

const {email,password} = req.body


       await  AdminModel.findOne({ email,password},(err,admin)=>{
            if (!admin) {
                return res.status(500).json({ errors: [{msg: "User Not found"}] })
            }
    
          admin = new AdminModel({
                email,
                password
         })
           const payload = {
               admin :{
                   id:admin.id
               }
           }
    
           jwt.sign(payload,"ss",(err,token)=>{
               if(err) throw err;
              return res.json({token});
           })
       
        })

        

})
app.get("/data",(req,res)=>{
    
    User.find({},(err,docs)=>{
        res.send(docs)
    })


})

if (process.env.NODE_ENV === "production") {
    app.use(express.static())
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log("Server running on port 5000"))