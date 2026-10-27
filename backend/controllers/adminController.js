var jwt = require("jsonwebtoken");
var path = require("path");
require("dotenv").config();
module.exports={}
var {adminAuth}=require("../models/adminmodel")
var adminAuthh=adminAuth();
function doSaveAdmin(req, resp) {
  var userObj = new adminAuthh(req.body);
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
async function doAdminLogin(req, resp)
{
  let user = await adminAuthh.findOne({ username: req.body.username });
  if (!user) {
    resp.json({ status: false, msg: "Something went wrong" });
    return;
  }
  
  if (req.body.password != user.password) {
    resp.json({ status: false, msg: "something went wrong" });
    return;
  }
  let jtoken = jwt.sign({ username: req.body.username }, process.env.SEC_KEY, {
    expiresIn: "1m",
  });
  resp.json({
    status: true,
    msg: "Logged In Successfully",
    user: user.username,
    token: jtoken,
  });
}
async function doAdminUpdate(req, resp)
{
  if(req.body.newPassword!=req.body.cPassword)
  {
    return resp.json({ status: false, msg: "Passwords do not match" });
  }
  let user = await adminAuthh.findOne({ username: req.body.username });
  if (!user) {
    resp.json({ status: false, msg: "Something went wrong" });
    return;
  }
  
  if (req.body.password != user.password) {
    resp.json({ status: false, msg: "Password is Wrong!!!" });
    return;
  }
  let admin= await adminAuthh.findOneAndUpdate({username: req.body.username}, { password: req.body.newPassword });

  resp.json({status:true, msg: "Password updated successfully" });

}

module.exports={doSaveAdmin,doAdminLogin,doAdminUpdate}