var Messages = (function () {
    function Messages(collection) {
        var _this = this;
        if (collection) {
            this._wrapper = collection;
            this._items = this._wrapper.querySelectorAll('.pane');
            this._wrapper.addEventListener('click', function (event) {
                var target = event.target;
                var action = target.getAttribute('data-close');
                if (action) {
                    _this.removeItem(target.parentNode);
                }
            });
        }
        this.setButtons();
    }
    Messages.prototype.setButtons = function () {
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            var button = document.createElement('div');
            button.classList.add('pane__close');
            button.setAttribute('data-close', 'click');
            item.appendChild(button);
        }
    };
    Messages.prototype.removeItem = function (item) {
        item.remove();
        console.log(item);
    };
    return Messages;
}());
