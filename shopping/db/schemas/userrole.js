const mongoose = require('../connection');
var Schema = mongoose.Schema;
var userroleSchema = new Schema({
    //FK
   userid:{
    type:Schema.Types.ObjectId,
    ref:'UserModel',
    required:true
   },
   roleid:{
       type:Schema.Types.ObjectId,
       ref:'RoleModel',
       required:true
   },
   status:{type:String,default:'A'}
});
var UserROleModel = mongoose.model('userrolemappings',userroleSchema);//it makes customer collection here
module.exports = UserROleModel;