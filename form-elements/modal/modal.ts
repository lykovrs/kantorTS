class ShowPrompt {
    private _modal;
    private _form;
    private _text;
    private _callback;
    private _promptMassege;
    private _sendMessage;

    constructor(text, callback){
        this._modal = document.getElementById('prompt-form-container');
        this._form = document.getElementById('prompt-form');
        this._promptMassege = document.getElementById('prompt-message');
        this._text = this._form.elements.text;
        this._callback = callback;
        // Скрываем по клику кнопки отмены 
        this._form.elements.cancel.addEventListener('click', (event) => {
            this._callback(null);  
            this.hide();
        }); 
        // Показываем в модальном окне текст из конструктора
        this._promptMassege.innerHTML = text;
        // Запускаем колбэк при отправке формы 
        this._form.addEventListener('submit', () => {
            this._callback(this._text.value);
        });
        
        document.addEventListener('keyup', (event) => {
            // Закрываем форму при нажатии на ESC
            if (event.keyCode == 27) {
                this._callback(null);  
                this.hide();
           }
           // Нажатия Tab/Shift+Tab переключают в цикле только по полям формы, они не позволяют переключиться на другие элементы страницы.
           let firsFormElement = this._form.elements[0];
           let lastFormElement = this._form.elements[this._form.elements.length - 1];

           if (event.keyCode == 9 && !event.shiftKey) {
                let result = [].some.call(this._form.elements, (item) => {
                    return document.activeElement === item;
                });

                if(!result) {
                    firsFormElement.focus();  
                }; 

                return false;
           }

            if (event.keyCode == 9 && event.shiftKey) {
                let result = [].some.call(this._form.elements, (item) => {
                    return document.activeElement === item;
                });

                if(!result) {
                    lastFormElement.focus();  
                }; 

                return false;
           }
        });

    };

    show():void {
        this._modal.style.display = 'block';
        this._text.focus();
    };

    hide():void {
        this._modal.style.display = 'none';
    };  
}