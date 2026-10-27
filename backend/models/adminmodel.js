var mongoose = require('mongoose');
function adminAuth()
{
    var schemaClass=mongoose.Schema;
    var objSchema= new schemaClass({
        username:{type:String, required:true,index:true,unique:true},
        password:{type:String, required:true},
    },
    {
        versionKey:false
    })
    var adminAuthh=mongoose.model("admin",objSchema);
    return adminAuthh;
}

module.exports={adminAuth}