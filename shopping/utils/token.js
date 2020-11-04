const jwt = require('jsonwebtoken');
const tokenOperations = {
    secretKey: 'BrainMentorsSecretkey',
    generateToken(userid){
        const token = jwt.sign({userid}, this.secretKey,{expiresIn:'1h'});
        console.log('Token',token);
        return token;
    },
    verifyToken(clientToken){
        let decoded = jwt.decode(clientToken,this.secretKey);
        if(decoded){
            return true;
        }
        else{
            return false;
        }

    }
}
module.exports = tokenOperations;