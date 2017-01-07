var Validator = (function () {
    function Validator(form) {
        var _this = this;
        this._valid = [];
        // Создаем и вставляем узел с текстом ошибки
        this.addErrorNode = function (item, text) {
            var validationError = "<span class=\"error\">" + text + "</span>";
            item.insertAdjacentHTML('afterEnd', validationError);
        };
        this._form = form;
        this._elements = this._form.elements;
        // Находим элементы, клик по которым вызывает проверку 
        for (var _i = 0, _a = this._elements; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.dataset.validatorValidate) {
                item.addEventListener('click', function (event) {
                    _this.validate();
                });
            }
            ;
        }
        ;
    }
    ;
    Validator.prototype.validate = function () {
        var password = null;
        var confirmationPassword = null;
        // Удаляем результаты предыдущей проверки, если есть
        var errorNodes = this._form.querySelectorAll('.error');
        this.removeErrorNodes(errorNodes);
        // Проходим по элементам и делаем проверки
        for (var _i = 0, _a = this._elements; _i < _a.length; _i++) {
            var item = _a[_i];
            // Проверяем поля с текстом
            if (item.dataset.validatorText && !item.value.length) {
                this._valid.push(false);
                this.validateText(item);
            }
            ;
            // Сохраняем ссылку на поле с паролем
            if (item.dataset.validatorPassword) {
                password = item;
            }
            ;
            // Сохраняем ссылку на поле с подтверждением пароля
            if (item.dataset.validatorPasswordConfirmation) {
                confirmationPassword = item;
            }
            ;
        }
        // Валидация пароля и подтверждения и установка флага
        this._valid.push(this.validatePassword(password, confirmationPassword));
    };
    // Провека текстового поля
    Validator.prototype.validateText = function (item) {
        this.addErrorNode(item, item.dataset.validatorText);
    };
    ;
    // Проверка полей пароля и подтверждения
    Validator.prototype.validatePassword = function (password, confirmationPassword) {
        if (!password.value.length) {
            this.addErrorNode(password, password.dataset.validatorPassword);
            return false;
        }
        if (password.value !== confirmationPassword.value) {
            this.addErrorNode(password, confirmationPassword.dataset.validatorPasswordConfirmation);
            return false;
        }
        return true;
    };
    ;
    // Удаление уведомлений об ошибках 
    Validator.prototype.removeErrorNodes = function (collection) {
        for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
            var item = collection_1[_i];
            item.remove();
        }
    };
    return Validator;
}());
