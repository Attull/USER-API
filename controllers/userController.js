

const register = (req, res)=>{
    const {name, age} =  req.body
    res.send(name + age)
}


const login = (req, res) =>{
    res.send("Login")
}

module.exports = {
    register,
    login
}