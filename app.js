const express = require("express")
const { route } = require("./routes/userRoutes")
const app = express()
const dotenv = require("dotenv")
const mong = require("mongoose")

dotenv.config()


app.use(express.json())

app.use(route)


mong.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("mongo DB connected successfully")
}).catch((err)=>{
    console.log(err)
})


app.listen(3000, ()=>{
        console.log("listening to the PORT 3000")
    })
