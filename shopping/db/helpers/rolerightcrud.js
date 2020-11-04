const RoleRightMOdel = require('../schemas/roleright');


const roleRightOperations = {
    add(roleRightObject){
      
        var promise = RoleRightMOdel.create(roleRightObject);
        return promise;
    },
    async search(roleId){
        const roleRightInfo = await RoleRightMOdel.find({'roleid':roleId});
        console.log('Role Right Info', roleRightInfo);
        return roleRightInfo;
    },
    update(){

    },
    remove(){

    }
}
module.exports = roleRightOperations;