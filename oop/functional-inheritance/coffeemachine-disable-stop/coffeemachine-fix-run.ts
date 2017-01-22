/**
 * Класс Машина
 */
class Machine {
    public _enabled = false;
    /**
     * Включаем машину
     */
    enable():void {
        this._enabled = true;
    };
    /**
     * Выключаем машину
     */
    disable():void {
        this._enabled = false;
    };

    constructor(power) {}
}

/**
 * Класс Кофеварка, дочерний от Машины
 */
class CoffeeMachine extends Machine {
    private static readonly _WATER_HEAT_CAPACITY = 4200;
    private _waterAmount = 0;
    private _power: number = null;
    private _capacity: number = null;
    private _timeout = null;


    constructor(power, capacity) {
        super(power);
        this._power = power;
        this._capacity = capacity;

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
     * Получаем колличество воды в кофеварке
     * @return {number}
     */
    getWaterAmount(): number {
        return this._waterAmount;
    };
    /**
     * Функция запускаемая после завершиния варки кофе
     */
    onReady(): void {
        alert('Кофе готов!');
    }
    /**
     * Устанавливаем колбэк после завершения варки кофе
     * @param {Function} func Произвольная функция
     */
    setOnReady(func): void {
        this.onReady = func;
    }
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
        if (this._enabled) {
            this._timeout = setTimeout(this.onReady, getTimeToBoil());
        } else {
            throw new Error("Ошибка, кофеварка выключена!");
        }


    };
    /**
     * Расшираем выключение машины для кофеварки
     */
    disable():void {
      super.disable();
      clearTimeout(this._timeout);
    }

}
