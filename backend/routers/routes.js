const routes=require("express").Router()
const postdata=require("../controller/usercontroller")
routes.post("/data",postdata)
module.exports=routes