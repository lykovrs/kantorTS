var ShowPrompt = (function () {
    function ShowPrompt(text, callback) {
        var _this = this;
        this._modal = document.getElementById('prompt-form-container');
        this._form = document.getElementById('prompt-form');
        this._promptMassege = document.getElementById('prompt-message');
        this._text = this._form.elements.text;
        this._callback = callback;
        // Скрываем по клику кнопки отмены 
        this._form.elements.cancel.addEventListener('click', function (event) {
            _this._callback(null);
            _this.hide();
        });
        // Показываем в модальном окне текст из конструктора
        this._promptMassege.innerHTML = text;
        // Запускаем колбэк при отправке формы 
        this._form.addEventListener('submit', function () {
            _this._callback(_this._text.value);
        });
        document.addEventListener('keyup', function (event) {
            // Закрываем форму при нажатии на ESC
            if (event.keyCode == 27) {
                _this._callback(null);
                _this.hide();
            }
            // Нажатия Tab/Shift+Tab переключают в цикле только по полям формы, они не позволяют переключиться на другие элементы страницы.
            var firsFormElement = _this._form.elements[0];
            var lastFormElement = _this._form.elements[_this._form.elements.length - 1];
            if (event.keyCode == 9 && !event.shiftKey) {
                var result = [].some.call(_this._form.elements, function (item) {
                    return document.activeElement === item;
                });
                if (!result) {
                    firsFormElement.focus();
                }
                ;
                return false;
            }
            if (event.keyCode == 9 && event.shiftKey) {
                var result = [].some.call(_this._form.elements, function (item) {
                    return document.activeElement === item;
                });
                if (!result) {
                    lastFormElement.focus();
                }
                ;
                return false;
            }
        });
    }
    ;
    ShowPrompt.prototype.show = function () {
        this._modal.style.display = 'block';
        this._text.focus();
    };
    ;
    ShowPrompt.prototype.hide = function () {
        this._modal.style.display = 'none';
    };
    ;
    return ShowPrompt;
}());
