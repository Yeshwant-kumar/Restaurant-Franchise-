var jwt = require("jsonwebtoken");
var path = require("path");
require("dotenv").config();
var {
  getUserModel,
  applicationModel,
  clientAuth,
  sales,
} = require("../models/usermodel");

var UserColRef = getUserModel();
var userApplication = applicationModel();
var clientAuthh = clientAuth();
var totalSales=sales();
function doSaveUserWithPost(req, resp) {
  console.log(req.body);
  var userObj = new UserColRef(req.body);
  userObj
    .save()
    .then((document) => {
      //resp.send(document)
      resp.json({ doc: document, status: true, msg: "Saved Successfully" });
    })
    .catch((err) => {
      console.log(err.message);
      //resp.send(err.message)
      resp.json({ status: false, msg: err.message });
    });
}

async function doLogin(req, resp) {
  let user = await UserColRef.findOne({ email: req.body.email });
  if (!user) {
    return resp.json({ status: false, msg: "Something went wrong" });
  }
  if (req.body.pwd != user.pwd) {
    resp.json({ status: false, msg: "something went wrong" });
    return;
  }
  let jtoken = jwt.sign({ email: req.body.email }, process.env.SEC_KEY, {
    expiresIn: "1m",
  });
  resp.json({
    status: true,
    msg: "Logged In Successfully",
    user: user,
    token: jtoken,
  });
}
async function doSaveApplication(req, resp) {
  var userObj = new userApplication(req.body);
  userObj
    .save()
    .then((document) => {
      //resp.send(document)
      resp.json({ doc: document, status: true, msg: "Saved Successfully" });
    })
    .catch((err) => {
      console.log(err.message);
      //resp.send(err.message)
      resp.json({ status: false, msg: err.message });
    });
}
async function doSearch(req, resp) {
  const result = await userApplication.find();
  //resp.send(users);
  resp.json({document:result,success: true});
}
async function doAccept(req, resp) {
  let email = req.body.email;
  let status = req.body.status;
  try {
    const result = await userApplication.findOneAndUpdate(
      { email },
      { $set: { status } },
      { new: true }
    );

    if (!result) {
      return resp.status(404).json({ message: "User not found" });
    }
  var pass=null;
  if (req.body.status === "2") 
  {
    pass=await generateAuth(email);
  }
    resp.json({ success: true, updatedUser: result,password:pass});
  } catch (error) {
    resp.status(500).json({ message: "Internal Server Error" });
  }
  

}
async function generateAuth(email) {
  let base = email.split("@")[0];
  let randomNum = Math.floor(Math.random() * 10000);
  let password = base + randomNum.toString();
  var userObj = new clientAuthh({email:email, password:password});
  userObj.save().then((document) => {
      console.log(document)
      })
      .catch((err) => {
        console.log(err.message);
      });
      return password;
}
async function doFLogin(req,resp)
{
  let user = await clientAuthh.findOne({ email: req.body.email });
  if (!user) {
    resp.json({ status: false, msg: "Something went wrong" });
    return;
  }
  
  if (req.body.password != user.password) {
    resp.json({ status: false, msg: "something went wrong" });
    return;
  }
  let jtoken = jwt.sign({ email: req.body.email }, process.env.SEC_KEY, {
    expiresIn: "2m",
  });
  resp.json({
    status: true,
    msg: "Logged In Successfully",
    user: user.email,
    token: jtoken,
  });
}
async function doAcceptSales(req, resp)
{
  var token = req.body.token;
  if (!token) {
    return resp.json({ tstatus: false, msg: "Token is missing" });
  }
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.SEC_KEY);
  } catch (err) {
    return resp.json({ tstatus: false, msg: "Invalid or expired token" });
  }
  var userObj = new totalSales(req.body);
  await userObj.save()
    .then((document) => {
      //resp.send(document)
      resp.json({ doc: document, status: true, msg: "Saved Successfully" });
    })
    .catch((err) => {
      console.log(err.message);
      resp.json({ status: false, msg: err.message });
    });
}
async function doRequestSales(req, resp)
{
  console.log(req.body)
  let email = req.body.user;
  try {
    const result = await totalSales.find(
      { email },
    );

    if (!result) {
      return resp.status(404).json({ message: "No Sales found" });
    }
    resp.json({document:result,success: true});
  } catch (error) {
    //console.error("Update Error:", error);
    resp.status(500).json({ message: "Internal Server Error" });
  }
}
async function doUserUpdate(req, resp)
{
  var token = req.body.token;
  if (!token) {
    return resp.json({ tstatus: false, msg: "Token is missing" });
  }
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.SEC_KEY);
  } catch (err) {
    return resp.json({ tstatus: false, msg: "Invalid or expired token" });
  }
    if(req.body.newPassword!=req.body.cPassword)
    {
      return resp.json({ status: false, msg: "Passwords do not match" });
    }
    let user = await clientAuthh.findOne({ email: req.body.email });
    if (!user) {
      resp.json({ status: false, msg: "Something went wrong" });
      return;
    }
    
    if (req.body.password != user.password) {
      resp.json({ status: false, msg: "Password is Wrong!!!" });
      return;
    }
    let updatedUser= await clientAuthh.findOneAndUpdate({email: req.body.email}, { password: req.body.newPassword },{new:true});
    if (!updatedUser)
    {
      return resp.json({ status: false, msg: "User not found" });
    }
    resp.json({status:true, msg: "Password updated successfully" });
  
}
async function forgotPassword(req,resp)
{
  let user = await clientAuthh.findOne({ email: req.body.email });
  if (!user) 
  {
    resp.json({ status: false, msg: "User Not Exists" });
    return;
  }
  else
  {
    resp.json({status:true,msg:"User Exists"})
  }
}
async function doResetPassword(req,resp)
{
  if(req.body.newPassword!=req.body.cPassword)
    {
      return resp.json({ status: false, msg: "Passwords do not match" });
    }
    let user = await clientAuthh.findOne({ email: req.body.email });
    if (!user) {
      resp.json({ status: false, msg: "Something went wrong" });
      return;
    }
    let updatedUser= await clientAuthh.findOneAndUpdate({email: req.body.email}, { password: req.body.newPassword },{new:true});
    if (!updatedUser)
    {
      return resp.json({ status: false, msg: "User not found" });
    }
    resp.json({status:true, msg: "Password updated successfully" });
}
module.exports = {
  doLogin,
  doSaveUserWithPost,
  doSaveApplication,
  doSearch,
  doAccept,
  doFLogin,
  doAcceptSales,
  doRequestSales,
  doUserUpdate,
  forgotPassword,
  doResetPassword,
};
