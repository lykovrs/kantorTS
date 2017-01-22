/**
 * Класс Кофеварка
 */
class CoffeeMachine {
    private static readonly _WATER_HEAT_CAPACITY = 4200;
    private _waterAmount = 0;
    private _power: number = null;
    private _capacity: number = null;

    constructor(power, capacity) {
        this._power = power;
        this._capacity = capacity
    }
    /**
     * Добавляем воду в кофемашину с проверками
     * @param {number} amount объем добавляемой воды
     */
    addWater(amount: number): void {
        this.setWaterAmount(amount + this._waterAmount);
    }
    /**
     * Устанавливаем колличесво воды в ковеварку с проверками
     * @param {number} amount объем воды
     */
    setWaterAmount(amount: number): void {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > this._capacity) {
            throw new Error("Нельзя залить больше, чем " + this._capacity);
        }

        this._waterAmount = amount;
    };
    /**
     * Варим кофе
     */
    run(): void {
        /**
         * Вспомогательная функия для варки кофе
         */
        function getTimeToBoil(): number {
            return this._waterAmount * CoffeeMachine._WATER_HEAT_CAPACITY * 80 / this._power;
        }
        /**
         * Функция запускаемая после завершиния варки кофе
         */
        function onReady(): void {
            alert('Кофе готов!');
        }

        setTimeout(onReady, getTimeToBoil());

    };

}
