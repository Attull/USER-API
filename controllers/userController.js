
const bcrypt =  require("bcryptjs")
const User = require("../models/userModal.js")

const register = async (req, res)=>{
    const {name, email, password, city} =  req.body

    if(!name || !email || !password || !city){
        res.status(400).json({
            message:"Enter correct value"
        })
    }

    const encrptPass = await bcrypt.hash(password, 5)

    const user = await User({
        name,
        email,
        city,
        password : encrptPass
    })

    user.save()

    res.status(200).send({
        message : "Account created"
    })


}


const login = async (req, res) =>{
      const { email, password} =  req.body

     const user = await User.find({email : email})

      if(!user){
        res.status(400).send({
            message : "No user found"
        })
      }

      const comparePass = bcrypt.compare(password, user.password)

      if(comparePass < 0){
        res.status(400).send({
            message : "Wrong password"
        })
      }

      res.status(200).send({
        message : "Login successfully"
      })

}

module.exports = {
    register,
    login
}