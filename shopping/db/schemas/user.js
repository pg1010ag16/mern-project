const mongoose = require('../connection');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    userid:{type:String, 
        required:true,
        trim:true,
        minlength:3,
        maxlength:30,
        lowercase:true
    },
    password:{type:String, required:true},
    status:{type:String, default:'A'},
    // rolemapid:{
    //     type:Schema.Types.ObjectId,
    //     ref:'UserRoleModel'
    // }
});
var UserModel = mongoose.model('users',userSchema);//it makes customer collection here
module.exports = UserModel;