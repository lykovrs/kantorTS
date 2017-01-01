var OnlyNum = (function () {
    function OnlyNum() {
        var _this = this;
        this._inputs = null;
        this._inputs = document.querySelectorAll('[data-enter-only]');
        document.addEventListener('keypress', function (event) {
            var char = _this.getChar(event);
            if (isNaN(char))
                event.preventDefault();
        });
    }
    OnlyNum.prototype.getChar = function (event) {
        if (event.which == null) {
            if (event.keyCode < 32)
                return null;
            return String.fromCharCode(event.keyCode); // IE
        }
        if (event.which != 0 && event.charCode != 0) {
            if (event.which < 32)
                return null;
            return String.fromCharCode(event.which); // остальные
        }
        return null; // специальная клавиша
    };
    return OnlyNum;
}());
