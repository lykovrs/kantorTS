var CoffeeMachine = (function () {
    function CoffeeMachine() {
        this.waterAmount = 0;
        this.WATER_HEAT_CAPACITY = 4200;
        this._session = null;
        this._power = null;
        this.run = function () {
            this._session = setTimeout(this.onReady, this.getBoilTime());
        };
    }
    CoffeeMachine.prototype.contsructor = function (power) {
        this.power = power;
    };
    CoffeeMachine.prototype.getBoilTime = function () {
        return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
    };
    CoffeeMachine.prototype.onReady = function () {
        alert("Кофе готово!");
    };
    CoffeeMachine.prototype.stop = function () {
        clearTimeout(this._session);
    };
    return CoffeeMachine;
}());
