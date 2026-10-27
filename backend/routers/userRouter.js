var express = require('express');
var obj=require("../controllers/usercontroller");


var userRouter= express.Router();

userRouter.post("/saveuserWithPost",obj.doSaveUserWithPost);
userRouter.post("/doLogin",obj.doLogin);
userRouter.post("/saveApplication",obj.doSaveApplication);
userRouter.post("/search",obj.doSearch);
userRouter.post("/doAccept",obj.doAccept);
userRouter.post("/doFLogin",obj.doFLogin);
userRouter.post("/saveSales",obj.doAcceptSales);
userRouter.post("/requestSales",obj.doRequestSales);
userRouter.post("/userupdate",obj.doUserUpdate);
userRouter.post("/forgotPassword",obj.forgotPassword);
userRouter.post("/resetPassword",obj.doResetPassword);
module.exports = userRouter;