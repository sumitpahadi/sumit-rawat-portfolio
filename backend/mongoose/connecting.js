const mongoose=require("mongoose")
const connectdb=async(url)=>{
    await mongoose.connect(url)
    .then(()=>console.log("mongoose is connected"))
    .catch((error)=>console.log(error))
}
module.exports=connectdb