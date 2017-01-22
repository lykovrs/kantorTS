
class CoffeeMachine {
    private static readonly _WATER_HEAT_CAPACITY = 4200;
    private _waterAmount = 0;
    private _power: number = null;
    private _capacity: number = null;

    constructor(power, capacity) {
        this._power = power;
        this._capacity = capacity
    }

    addWater(amount: number): void {
        this.setWaterAmount(amount + this._waterAmount);
    }

    setWaterAmount(amount: number): void {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > this._capacity) {
            throw new Error("Нельзя залить больше, чем " + this._capacity);
        }

        this._waterAmount = amount;
    };

    run(): void {
        function getTimeToBoil() {
            return this._waterAmount * CoffeeMachine.WATER_HEAT_CAPACITY * 80 / this._power;
        }

        function onReady() {
            alert('Кофе готов!');
        }

        setTimeout(onReady, getTimeToBoil());
    };

}
