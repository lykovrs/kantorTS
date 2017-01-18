
function ask(question: string, answer: string, ok: Function, fail: Function) {
    let result: string = prompt(question, "");
    if (result.toLowerCase() === answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    loginOk: function() {
        alert(this.login + ' вошёл в сайт');
    },

    loginFail: function() {
        alert(this.login + ': ошибка входа');
    },

    checkPassword: function() {
        ask.bind(this)("Ваш пароль?", this.password, this.loginOk.bind(user), this.loginFail.bind(user));
    }
};
user.checkPassword(user);
