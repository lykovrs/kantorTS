var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Menu = (function () {
    function Menu(state) {
        this.STATE_OPEN = 1;
        this.STATE_CLOSED = 0;
        this._state = null;
        this._state = state || this.STATE_CLOSED;
    }
    Menu.prototype.open = function () {
        this._state = this.STATE_OPEN;
    };
    ;
    Menu.prototype.close = function () {
        this._state = this.STATE_CLOSED;
    };
    ;
    Menu.prototype._stateAsString = function () {
        switch (this._state) {
            case this.STATE_OPEN:
                return 'открыто';
            case this.STATE_CLOSED:
                return 'закрыто';
        }
    };
    ;
    Menu.prototype.showState = function () {
        alert(this._stateAsString());
    };
    ;
    return Menu;
}());
;
var AnimatingMenu = (function (_super) {
    __extends(AnimatingMenu, _super);
    function AnimatingMenu(state) {
        var _this = _super.call(this, state) || this;
        _this.STATE_ANIMATING = 2;
        _this._timeStamp = null;
        return _this;
    }
    // TODO:Исправить метод
    AnimatingMenu.prototype.open = function () {
        var _this = this;
        debugger;
        this._state = this.STATE_ANIMATING;
        if (this._state == 2) {
            alert('анимация');
        }
        this._timeStamp = setTimeout(function () {
            _this.open();
        }, 1000);
    };
    AnimatingMenu.prototype.close = function () {
        clearTimeout(this._timeStamp);
        _super.prototype.close.call(this);
    };
    return AnimatingMenu;
}(Menu));
