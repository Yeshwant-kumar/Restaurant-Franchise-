var mongoose = require('mongoose');
var validator= require('validator');
function getUserModel()
{
    var schemaClass=mongoose.Schema;
    var objSchema= new schemaClass({
        email:{type:String, required:true,index:true,unique:true,validate: [validator.isEmail, "Please provide a valid email address"],},
        pwd:{type:String,minLength: [
            6,
            "Plase make sure your password is atleast 6 characters long",
          ],
          maxLength: [
            128,
            "Plase make sure your password is less than 128 characters long",
          ],},
        dos:{type:Date, default:Date.now},
    },
    {
        versionKey:false
    })
    var userColRef=mongoose.model("husers",objSchema);
    return userColRef;
}
function applicationModel()
{
    var schemaClass=mongoose.Schema;
    var objSchema= new schemaClass({
        email:{type:String, required:true,index:true,unique:true,
            validate: [validator.isEmail, "Please provide a valid email address"],
        },
        phonenumber:{type:String, required:true,match: [/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"]},
        name:String,
        residentaladdress:String,
        siteaddress:String,
        state:String,
        city:String,
        zipcode:String,
        area:String,
        floor:String,
        dos:{type:Date, default:Date.now},
        status:{type:Number,default:0}
    },
    {
        versionKey:false
    })
    var userApplication=mongoose.model("applications",objSchema);

    return userApplication;
}
function clientAuth()
{
    var schemaClass=mongoose.Schema;
    var objSchema= new schemaClass({
        email:{type:String, required:true,index:true,unique:true,
            validate: [validator.isEmail, "Please provide a valid email address"],
        },
        password:{type:String, required:true},
        dos:{type:Date, default:Date.now},
        status:{type:Number, default:0}
    },
    {
        versionKey:false
    })
    var clientAuthh=mongoose.model("FClients",objSchema);
    return clientAuthh;
}
function sales()
{
    var schemaClass=mongoose.Schema;
    var objSchema=new schemaClass({
        email:{type:String,required:true,
            validate: [validator.isEmail, "Please provide a valid email address"],
        },
        sales:{type:Number},
        date:{type:Date,default:Date},
        cVisited:{type:Number}
    },
    {
        versionKey:false
    })
    var totalSales=mongoose.model("tSales",objSchema);
    return totalSales;
}

module.exports={getUserModel,applicationModel,clientAuth,sales}