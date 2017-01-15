/**
 * Класс с геттерами/сеттерами свойств
 * fullName должно остаться свойством, а firstName/lastName – реализованы через get/set.
 */
var User = (function () {
    function User(fullName) {
        this.fullName = fullName;
    }
    Object.defineProperty(User.prototype, "firstName", {
        // Геттер для имени
        get: function () {
            var name = this.fullName.split(' ');
            return name[0];
        },
        // Сеттер для имени
        set: function (name) {
            var fullName = this.fullName.split(' ');
            fullName[0] = name;
            this.fullName = fullName.join(' ');
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(User.prototype, "lastName", {
        // Геттер для фамилии
        get: function () {
            var surname = this.fullName.split(' ');
            return surname[1];
        },
        // Сеттер для фамилии
        set: function (surname) {
            var fullName = this.fullName.split(' ');
            fullName[1] = surname;
            this.fullName = fullName.join(' ');
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return User;
}());
