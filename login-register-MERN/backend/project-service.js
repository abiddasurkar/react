import  express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/myLoginRegisterDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log('Database Connected')
}
);
//creating user schema
const userSchema = mongoose.Schema({
    firstname: String,
    lastName:String,
    email:String,
    password:String
    })
   
//creating Modues
const User = new mongoose.model("User",userSchema)
 

//Routes
app.post("/",(req,res)=>{
    res.send('My API Login')
})

app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { firstName,lastName, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                firstName,
                lastName,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

app.listen(9002,()=>{
    console.log('DB strated at port 9002')
})

