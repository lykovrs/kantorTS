var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var User = (_a = (function () {
        function class_1(name, surname) {
            this._name = name;
            this._surname = surname;
            User.count++;
        }
        ;
        class_1.prototype.getFullName = function () {
            return this._name + " " + this._surname;
        };
        ;
        return class_1;
    }()),
    _a.count = 0,
    _a);
var user = new User('Ivan', 'Petrov');
console.log(user.getFullName());
var Admin = (function (_super) {
    __extends(Admin, _super);
    function Admin(name, surname, admin) {
        var _this = _super.call(this, name, surname) || this;
        _this._admin = admin;
        return _this;
    }
    ;
    Admin.prototype.getFullName = function () {
        return _super.prototype.getFullName.call(this) + ' is admin: ' + this._admin;
    };
    ;
    return Admin;
}(User));
;
var admin = new Admin('Roman', 'Lykov', true);
console.log(admin.getFullName());
var Programmer = (function () {
    function Programmer() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._langs = args;
    }
    ;
    Object.defineProperty(Programmer.prototype, "skills", {
        get: function () {
            return this._langs;
        },
        set: function (arr) {
            this._langs = arr;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Programmer;
}());
;
var frontEndDeveloper = new Programmer('HTML', 'CSS', 'JavaScript');
console.log(frontEndDeveloper);
var backEndDeveloper = new Programmer('Phyton', 'Java');
console.log(backEndDeveloper.skills);
backEndDeveloper.skills = ["PHP"];
console.log(backEndDeveloper.skills);
console.log(User.count);
var _a;
