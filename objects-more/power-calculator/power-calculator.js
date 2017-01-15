/**
* Конструктор, который создаёт расширяемые объекты-калькуляторы.
 */
var PowerCalculator = (function () {
    function PowerCalculator() {
        //  Храним новые методы в объекте
        this._methods = {
            "-": function () {
                return a - b;
            },
            "+": function (a, b) {
                return a + b;
            }
        };
    }
    // Метод, делающий вычисления, на основе методов из объекта
    PowerCalculator.prototype.calculate = function (expr) {
        var expression = expr.split(' ');
        var firstValue = +expression[0];
        var secondValue = +expression[2];
        var operator = expression[1];
        return this._methods[operator](firstValue, secondValue);
    };
    // Обучаем нашу функцию новым методам вычисления на лету
    PowerCalculator.prototype.addMethod = function (id, func) {
        this._methods[id] = func;
    };
    return PowerCalculator;
}());
