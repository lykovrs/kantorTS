var Calculator = (function () {
    function Calculator() {
    }
    // Запрашиваем 2 заначения
    Calculator.prototype.read = function () {
        var values = prompt('Введите пару значений через пробел', '');
        values = values.split(' ');
        this.firstValue = +values[0];
        this.secondValue = +values[1];
    };
    // Возвращаем сумму двух значений
    Calculator.prototype.sum = function () {
        return this.firstValue + this.secondValue;
    };
    // Возвращаем произведение двух значений
    Calculator.prototype.mul = function () {
        return this.firstValue * this.secondValue;
    };
    return Calculator;
}());
