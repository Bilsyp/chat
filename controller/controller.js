// API getPost
const fs = require("fs")
const path = require("path")
const axios = require("axios")

const files = ()=> {
  const i = fs.readFileSync(path.join(__dirname, "products.json"), "utf8")
  return JSON.parse(i)
}
const getData = async ()=> {
  const data = await axios.get("http://localhost:3000/api")
  const result = data.data
  return result
}

const getPost = (req, res)=> {
  const ios = files()
  res.status(200).json(ios)
}
const Home = (req, res)=> {
  const start = async ()=> {
    const data = await getData()
    res.render("../views/index.ejs",{
      data
    })
  }
  start()
}
module.exports = {
  getPost,
  Home
}