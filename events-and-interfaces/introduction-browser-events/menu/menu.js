var Menu = (function () {
    function Menu(mainElement) {
        var _this = this;
        this._wrapper = mainElement;
        if (this._wrapper) {
            this._wrapper.addEventListener('click', function () {
                _this.tooggleMenu();
            });
        }
        ;
    }
    ;
    Menu.prototype.tooggleMenu = function () {
        this._wrapper.classList.toggle('menu_is_open');
    };
    return Menu;
}());
