const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const route = require("./routes/userRoutes")


dotenv.config()


app.use(express.json())

app.use(route)


async function mConnect(){
    await mongoose.connect("mongodb://atul852798_db_user:PWLuqg7KaUktMPTg@cluster0.0gwfksr.mongodb.net/?appName=Cluster0")
    .then(() => {
        console.log("mongo DB connected successfully")

    }).catch((err) => {
        console.log(err)
    })
}

mConnect()

app.listen(3000, () => {
    console.log("listening to the PORT 3000")
})



