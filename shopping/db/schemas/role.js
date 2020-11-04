const mongoose = require('../connection');
var Schema = mongoose.Schema;
var roleSchema = new Schema({
    name:{type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:30,
        lowercase:true
    },
    descr:{type:String, required:true},
    status:{type:String, default:'A'}
});
var RoleModel = mongoose.model('roles',roleSchema);//it makes customer collection here
module.exports = RoleModel;