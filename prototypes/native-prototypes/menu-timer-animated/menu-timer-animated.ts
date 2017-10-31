/**
 * Класс Меню
 */
class SuperMenu {
    protected STATE_OPEN: number = 1;
    protected STATE_CLOSED: number = 0;
    protected _state: number = null;


    constructor(state: number) {
        this._state = state || this.STATE_CLOSED;
    }
    /**
     * Меняем состояние на открытое
     */
    public open(): void {
        this._state = this.STATE_OPEN;
    };
    /**
     * Меняем состояние на закрытое
     */
    public close(): void {
        this._state = this.STATE_CLOSED;
    };
    /**
     * Определяем текущее состояние
     * @return {string} состояние в виде строкового представления
     */
    protected _stateAsString(): string {
        switch (this._state) {
            case this.STATE_OPEN:
                return 'открыто';

            case this.STATE_CLOSED:
                return 'закрыто';
        }
    };
    /**
     * Вывод текущего состояния
     */
    public showState(): void {
        alert(this._stateAsString());
    };
};

/**
 * Расширяем возможности нашего меню анимацией
 */
class AnimatingMenu extends SuperMenu {
    protected STATE_ANIMATING: number = 2;

    constructor(state: number) {
        super(state);
    }
    /**
     * Расшираем метод определения состояния, добавив состояние анимации
     * @return {string} строку состояния
     */
    protected _stateAsString(): string {
        if (this._state === 2) {
            return 'анимация';
        } else {
            return super._stateAsString();
        }
    };
    /**
     * Добавляем метод с анимацией
     */
    public animating(): void {
        this._state = this.STATE_ANIMATING;
    }
}
