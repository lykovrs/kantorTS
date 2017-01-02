var CustomTextarea = (function () {
    function CustomTextarea() {
        var _this = this;
        this._area = document.getElementById('area');
        this._view = document.getElementById('view');
        // Коды клавиш для сочетаний
        var PRESSED = {
            edit: 69,
            save: 83,
            cancel: 27
        };
        document.addEventListener('keydown', function (event) {
            var ctrlKey = event.ctrlKey;
            var secondKey = event.keyCode;
            // Сочетание для редактирования поля
            if (ctrlKey && secondKey == PRESSED.edit) {
                event.preventDefault();
                _this.editArea();
            }
            // Сочетание для сохранения результата ввода
            if (ctrlKey && secondKey == PRESSED.save) {
                event.preventDefault();
                _this.saveResult();
            }
            // Нажатие клавиши для отмены
            if (secondKey == PRESSED.cancel) {
                event.preventDefault();
                _this.cancel();
            }
        });
    }
    CustomTextarea.prototype.editArea = function () {
        this._area.style.display = 'block';
        this._view.style.display = 'none';
        this._area.focus();
    };
    CustomTextarea.prototype.saveResult = function () {
        this._value = this._area.value;
        this._view.innerHTML = this._value;
        this._area.style.display = 'none';
        this._view.style.display = 'block';
    };
    CustomTextarea.prototype.cancel = function () {
        this._area.style.display = 'none';
        this._view.style.display = 'block';
    };
    return CustomTextarea;
}());
