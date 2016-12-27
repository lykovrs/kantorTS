var Messages = (function () {
    function Messages(collection) {
        this._items = collection;
        this.setButtons();
    }
    Messages.prototype.setButtons = function () {
        var _this = this;
        var _loop_1 = function (item) {
            var button = document.createElement('div');
            button.classList.add('pane__close');
            button.addEventListener('click', function () { return _this.removeItem(item); });
            item.appendChild(button);
        };
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            _loop_1(item);
        }
    };
    Messages.prototype.removeItem = function (item) {
        item.remove();
        console.log(item);
    };
    return Messages;
}());
