var express=require("express")
var obj=require("../controllers/adminController");
var adminRouter=express.Router();

adminRouter.post("/saveAdmin",obj.doSaveAdmin)
adminRouter.post("/adminLogin",obj.doAdminLogin)
adminRouter.post("/adminUpdate",obj.doAdminUpdate)

module.exports=adminRouter;