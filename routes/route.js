const express = require("express")
const {
  getPost,Home
} = require("../controller/controller")
const router = express.Router()
const goal = express.Router()
router.get("/", getPost)

goal.get("/",Home)
module.exports = {
  goal,
  router
}