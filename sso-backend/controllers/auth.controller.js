const User = require('../models/user');
const Database = require('../utils/db');

async function loginController(email, password) {
    var user = await Database.getInstance().getUser("users", { email });
    console.log(user);
    if (user) {
        var isPasswordCorrect = user.verify(password);
        if (isPasswordCorrect) {
            return 1;
        } else {
            return 2;
        }
    } else {
        return 3;
    }
}

async function signupController(fullName, email, password, securityQuestion, securityQuestionAnswer) {
    var isExists = await Database.getInstance().checkExists("users", { email });
    if (!isExists) {
        var newUser = new User(fullName, email, password, securityQuestion, securityQuestionAnswer);
        newUser.setPassword(password);
        console.log(newUser);
        var isInserted = await Database.getInstance().insertOne("users", newUser);
        if (isInserted) return 1;
        else return 2;
    } else {
        return 3;
    }
}

async function resetPasswordController(req, res) {

}

module.exports = {
    loginController,
    signupController,
    resetPasswordController,
}
