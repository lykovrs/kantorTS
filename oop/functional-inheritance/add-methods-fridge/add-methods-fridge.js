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
 * Класс Холодильник, дочерний от Машины
 */
var Fridge = (function (_super) {
    __extends(Fridge, _super);
    function Fridge(power) {
        _super.call(this, power);
        this._food = [];
        this._power = null;
        this._power = power;
    }
    /**
     * Добавляем еду в холодильник
     * @param {[type]} ...food произвольное колличество продуктов
     */
    Fridge.prototype.addFood = function () {
        var food = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            food[_i - 0] = arguments[_i];
        }
        if (this._enabled) {
            this._food = this._food.concat(food);
        }
        else {
            throw new Error("Ошибка, холодильник выключен");
        }
        if (this._food.length > this._power / 100) {
            throw new Error("Ошибка, слишком много еды");
        }
    };
    /**
     * Получаем еду из холодильника
     * @return {[type]} массив с едой
     */
    Fridge.prototype.getFood = function () {
        return this._food.slice();
    };
    /**
     * Удаляем из холодильника один продукт
     * @param  {[type]} item сыылка на продукт
     */
    Fridge.prototype.removeFood = function (item) {
        var position = this._food.indexOf(item);
        if (position >= 0)
            this._food.splice(position, 1);
    };
    /**
     * Фильтрация продуктов в холодильнике
     * @param  {[type]} func Произвольная функция для фильтарции
     * @return {[type]}      Массив отфильтрованных продуктов
     */
    Fridge.prototype.filterFood = function (func) {
        return this._food.filter(func);
    };
    return Fridge;
}(Machine));
