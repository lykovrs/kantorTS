/**
 * Класс Кофеварка
 */
var CoffeeMachine = (function () {
    function CoffeeMachine(power, capacity) {
        this._waterAmount = 0;
        this._power = null;
        this._capacity = null;
        this._power = power;
        this._capacity = capacity;
    }
    /**
     * Добавляем воду в кофемашину с проверками
     * @param {number} amount объем добавляемой воды
     */
    CoffeeMachine.prototype.addWater = function (amount) {
        this.setWaterAmount(amount + this._waterAmount);
    };
    /**
     * Устанавливаем колличесво воды в ковеварку с проверками
     * @param {number} amount объем воды
     */
    CoffeeMachine.prototype.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > this._capacity) {
            throw new Error("Нельзя залить больше, чем " + this._capacity);
        }
        this._waterAmount = amount;
    };
    ;
    /**
     * Получаем колличество воды в кофеварке
     * @return {number}
     */
    CoffeeMachine.prototype.getWaterAmount = function () {
        return this._waterAmount;
    };
    ;
    /**
     * Функция запускаемая после завершиния варки кофе
     */
    CoffeeMachine.prototype.onReady = function () {
        alert('Кофе готов!');
    };
    /**
     * Устанавливаем колбэк после завершения варки кофе
     * @param {Function} func Произвольная функция
     */
    CoffeeMachine.prototype.setOnReady = function (func) {
        this.onReady = func;
    };
    /**
     * Варим кофе
     */
    CoffeeMachine.prototype.run = function () {
        /**
         * Вспомогательная функия для варки кофе
         */
        function getTimeToBoil() {
            return this._waterAmount * CoffeeMachine._WATER_HEAT_CAPACITY * 80 / this._power;
        }
        setTimeout(this.onReady, getTimeToBoil());
    };
    ;
    CoffeeMachine._WATER_HEAT_CAPACITY = 4200;
    return CoffeeMachine;
}());
