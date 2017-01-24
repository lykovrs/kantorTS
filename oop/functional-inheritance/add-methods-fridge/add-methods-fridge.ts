/**
 * Класс Машина
 */
class Machine {
    public _enabled = false;
    /**
     * Включаем машину
     */
    enable(): void {
        this._enabled = true;
    };
    /**
     * Выключаем машину
     */
    disable(): void {
        this._enabled = false;
    };


    constructor(power:number) { }
}

/**
 * Класс Холодильник, дочерний от Машины
 */
class Fridge extends Machine {
    private _food = [];
    private _power: number = null;


    constructor(power) {
        super(power);
        this._power = power;
    }
    /**
     * Добавляем еду в холодильник
     * @param {[type]} ...food произвольное колличество продуктов
     */
    addFood(...food:any[]): void {
        if (this._enabled) {
            this._food = this._food.concat(food);
        } else {
            throw new Error("Ошибка, холодильник выключен");
        }

        if (this._food.length > this._power / 100) {
            throw new Error("Ошибка, слишком много еды");
        }

    }
    /**
     * Получаем еду из холодильника
     * @return {[type]} массив с едой
     */
    getFood() {
        return this._food.slice();
    }
    /**
     * Удаляем из холодильника один продукт
     * @param  {[type]} item сыылка на продукт
     */
    removeFood(item):void {
      let position = this._food.indexOf(item);
      if(position >= 0) this._food.splice(position, 1);
    }
    /**
     * Фильтрация продуктов в холодильнике
     * @param  {[type]} func Произвольная функция для фильтарции
     * @return {[type]}      Массив отфильтрованных продуктов
     */
    filterFood(func) {
        return this._food.filter(func);
    }
}
