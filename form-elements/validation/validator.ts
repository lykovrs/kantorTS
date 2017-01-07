class Validator {
   private _form; 
   private _elements;
   private _valid = [];

    constructor(form) {
        this._form = form;
        this._elements = this._form.elements;
        // Находим элементы, клик по которым вызывает проверку 
        for(let item of this._elements) {
            if(item.dataset.validatorValidate){
                item.addEventListener('click', (event) => {
                    this.validate();
                });
            };
        };
    };

    validate() {
        let password = null;
        let confirmationPassword = null;

        // Удаляем результаты предыдущей проверки, если есть
        let errorNodes = this._form.querySelectorAll('.error');
        this.removeErrorNodes(errorNodes);
        // Проходим по элементам и делаем проверки
        for(let item of this._elements) {
            // Проверяем поля с текстом
            if(item.dataset.validatorText && !item.value.length){
                this._valid.push(false);
                this.validateText(item); 
            }; 
            // Сохраняем ссылку на поле с паролем
            if(item.dataset.validatorPassword){
                password = item;
            };
            // Сохраняем ссылку на поле с подтверждением пароля
            if(item.dataset.validatorPasswordConfirmation){
                confirmationPassword = item;
            };
        }
        // Валидация пароля и подтверждения и установка флага
        this._valid.push(this.validatePassword(password, confirmationPassword));
    }
    // Создаем и вставляем узел с текстом ошибки
    addErrorNode = (item, text) => {
        let validationError = `<span class="error">${text}</span>`;
        item.insertAdjacentHTML('afterEnd',validationError);
    };
    // Провека текстового поля
    validateText(item) {
        this.addErrorNode(item, item.dataset.validatorText)
    };
    // Проверка полей пароля и подтверждения
    validatePassword(password , confirmationPassword):boolean {
        if(!password.value.length) {
            this.addErrorNode(password, password.dataset.validatorPassword);
            return false;
        } 
        if(password.value !== confirmationPassword.value) {
            this.addErrorNode(password, confirmationPassword.dataset.validatorPasswordConfirmation);
            return false;
        }
        return true;
    };
    // Удаление уведомлений об ошибках 
    removeErrorNodes(collection) {
       for (let item of collection) {
           item.remove();
       }
   }
}