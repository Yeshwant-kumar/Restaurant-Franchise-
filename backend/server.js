var express=require("express");
var fileuploader=require("express-fileupload");
var mongoose=require("mongoose");
var cors=require("cors");
var path=require("path");
var dotenv=require("dotenv");
var {url}=require ("./config/config");

var app=express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 2004;
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server running successfully on port ${PORT}`);
});

app.use(fileuploader());
dotenv.config();
mongoose.connect(url).then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log(err.message);
})

var userRouter=require("./routers/userRouter");
app.use("/user",userRouter);

var adminRouter=require("./routers/adminRouter");
app.use("/admin",adminRouter)
