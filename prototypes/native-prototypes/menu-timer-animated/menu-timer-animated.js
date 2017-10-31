var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Класс Меню
 */
var SuperMenu = (function () {
    function SuperMenu(state) {
        this.STATE_OPEN = 1;
        this.STATE_CLOSED = 0;
        this._state = null;
        this._state = state || this.STATE_CLOSED;
    }
    /**
     * Меняем состояние на открытое
     */
    SuperMenu.prototype.open = function () {
        this._state = this.STATE_OPEN;
    };
    ;
    /**
     * Меняем состояние на закрытое
     */
    SuperMenu.prototype.close = function () {
        this._state = this.STATE_CLOSED;
    };
    ;
    /**
     * Определяем текущее состояние
     * @return {string} состояние в виде строкового представления
     */
    SuperMenu.prototype._stateAsString = function () {
        switch (this._state) {
            case this.STATE_OPEN:
                return 'открыто';
            case this.STATE_CLOSED:
                return 'закрыто';
        }
    };
    ;
    /**
     * Вывод текущего состояния
     */
    SuperMenu.prototype.showState = function () {
        alert(this._stateAsString());
    };
    ;
    return SuperMenu;
}());
;
/**
 * Расширяем возможности нашего меню анимацией
 */
var AnimatingMenu = (function (_super) {
    __extends(AnimatingMenu, _super);
    function AnimatingMenu(state) {
        var _this = _super.call(this, state) || this;
        _this.STATE_ANIMATING = 2;
        return _this;
    }
    /**
     * Расшираем метод определения состояния, добавив состояние анимации
     * @return {string} строку состояния
     */
    AnimatingMenu.prototype._stateAsString = function () {
        if (this._state === 2) {
            return 'анимация';
        }
        else {
            return _super.prototype._stateAsString.call(this);
        }
    };
    ;
    /**
     * Добавляем метод с анимацией
     */
    AnimatingMenu.prototype.animating = function () {
        this._state = this.STATE_ANIMATING;
    };
    return AnimatingMenu;
}(SuperMenu));
