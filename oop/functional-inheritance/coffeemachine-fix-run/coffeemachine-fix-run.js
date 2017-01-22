var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Класс Машина
 */
var Machine = (function () {
    function Machine(power) {
        this._enabled = false;
    }
    /**
     * Включаем машину
     */
    Machine.prototype.enable = function () {
        this._enabled = true;
    };
    ;
    /**
     * Выключаем машину
     */
    Machine.prototype.disable = function () {
        this._enabled = false;
    };
    ;
    return Machine;
}());
/**
 * Класс Кофеварка, дочерний от Машины
 */
var CoffeeMachine = (function (_super) {
    __extends(CoffeeMachine, _super);
    function CoffeeMachine(power, capacity) {
        _super.call(this, power);
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
        if (this._enabled) {
            setTimeout(this.onReady, getTimeToBoil());
        }
        else {
            throw new Error("Ошибка, кофеварка выключена!");
        }
    };
    ;
    CoffeeMachine._WATER_HEAT_CAPACITY = 4200;
    return CoffeeMachine;
}(Machine));
