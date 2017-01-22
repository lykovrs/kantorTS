var CoffeeMachine = (function () {
    function CoffeeMachine(power, capacity) {
        this._waterAmount = 0;
        this._power = null;
        this._capacity = null;
        this._power = power;
        this._capacity = capacity;
    }
    CoffeeMachine.prototype.addWater = function (amount) {
        this.setWaterAmount(amount + this._waterAmount);
    };
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
    CoffeeMachine.prototype.run = function () {
        function getTimeToBoil() {
            return this._waterAmount * CoffeeMachine.WATER_HEAT_CAPACITY * 80 / this._power;
        }
        function onReady() {
            alert('Кофе готов!');
        }
        setTimeout(onReady, getTimeToBoil());
    };
    ;
    CoffeeMachine._WATER_HEAT_CAPACITY = 4200;
    return CoffeeMachine;
}());
