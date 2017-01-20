class CoffeeMachine {
    public waterAmount = 0;
    readonly WATER_HEAT_CAPACITY = 4200;
    private _session = null;
    private _power = null;

    contsructor(power: number) {
      this.power = power;
    }

    getBoilTime() {
        return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
    }

    onReady() {
        alert("Кофе готово!");
    }

    run = function() {
        this._session = setTimeout(this.onReady, this.getBoilTime());
    };

    stop() {
        clearTimeout(this._session);
    }

}
