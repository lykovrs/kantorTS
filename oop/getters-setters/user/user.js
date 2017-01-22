var User = (function () {
    function User() {
        this._firstName = null;
        this._surname = null;
    }
    User.prototype.setFirstName = function (name) {
        this._firstName = name;
    };
    User.prototype.setSurname = function (surname) {
        this._surname = surname;
    };
    User.prototype.getFullName = function (name) {
        return this._firstName + ' ' + this._surname;
    };
    return User;
}());
