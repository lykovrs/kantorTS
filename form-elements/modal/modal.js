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
        // Закрываем форму при нажатии на ESC
        // document.addEventListener('keypress', (event) => {
        //     this._callback(null);  
        //     console.log(event)  
        //     this.hide();
        // });
        // TODO: 
        // Нажатия Tab/Shift+Tab переключают в цикле только по полям формы, они не позволяют переключиться на другие элементы страницы.
        // При нажатии на Отмена или на клавишу Esc – должна вызываться функция callback(null). Клавиша Esc должна закрывать форму всегда, даже если поле для ввода сообщения не в фокусе.
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
