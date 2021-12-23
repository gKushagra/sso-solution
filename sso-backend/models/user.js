const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');

class User {

    userId = null;
    fullName = null;
    email = null;
    password = null;
    securityQuestion = null;
    securityQuestionAnswer = null;

    constructor(userId = uuid(), fullName, email, password, securityQuestion, securityQuestionAnswer) {
        this.userId = userId;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.securityQuestion = securityQuestion;
        this.securityQuestionAnswer = securityQuestion;
    }

    getUserId() { return this.userId; }
    setUserId(userId) { this.userId = userId }

    getFullName() { return this.fullName; }
    setFullName() { this.fullName = this.fullName; }

    getEmail() { return this.email }
    setEmail(email) { this.email = email }

    getPassword() { return this.password; }
    setPassword(password) {
        // create hash
        var hash = bcrypt.hashSync(password, 10);
        this.password = hash;
    }

    getSecurityQuestion() { return this.securityQuestion; }
    setSecurityQuestion(securityQuestion) { this.securityQuestion = securityQuestion; }

    getSecurityQuestionAnswer() { return this.securityQuestionAnswer; }
    setSecurityQuestionAnswer(securityQuestionAnswer) { this.securityQuestionAnswer = securityQuestionAnswer; }

    verify(password) {
        return bcrypt.compareSync(password, this.password);
    }

}

module.exports = User;