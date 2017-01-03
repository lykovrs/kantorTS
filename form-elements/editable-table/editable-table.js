var EditableTable = (function () {
    function EditableTable(table) {
        var _this = this;
        this._activeTd = null;
        this._oldTdInner = null;
        this._conditionEdit = false;
        this._table = table;
        this._table.addEventListener('click', function (event) {
            var target = event.target;
            while (target) {
                // Перехватываем клик по ячейке
                if (target.nodeName === 'TD' && !_this._conditionEdit) {
                    _this._conditionEdit = true;
                    // Сохраняем ссылку на активную ячейку 
                    _this._activeTd = target;
                    // Сохраняем текущее содержимое
                    _this._oldTdInner = target.innerHTML;
                    // Устанавливаем для ячейки состояние редактирования
                    _this.causeСonditionEdit(target, _this._oldTdInner);
                    // Устанавливаем фокус на поле ввода  
                    var area = target.querySelector('textarea');
                    _this._activeTd.classList.add('active');
                    area.focus();
                    break;
                }
                // Обработка кликов по кнопкам
                if (target.dataset) {
                    // Подтверждение редактирования
                    if (target.dataset.editTable === 'ok') {
                        _this._conditionEdit = false;
                        var area = _this._activeTd.querySelector('textarea');
                        // Сохраняем новое содержимое
                        _this.saveNewCondition(area.value);
                        _this._activeTd.classList.remove('active');
                    }
                    // Отмена редактирования
                    if (target.dataset.editTable === 'cancel') {
                        _this._conditionEdit = false;
                        // Возвращаем старое содержимое
                        _this._activeTd.innerHTML = _this._oldTdInner;
                        _this._activeTd.classList.remove('active');
                    }
                }
                ;
                // Продолжаем всплытие
                target = target.parentNode;
            }
        });
    }
    // Метод для перехода в состояние редактирования 
    EditableTable.prototype.causeСonditionEdit = function (node, inner) {
        var newInner = "\n            <textarea style=\"width: " + node.clientWidth + "px; height: " + node.clientHeight + "px\" data-edit-table=\"area\">" + inner + "</textarea>\n            <div class=\"buttons\">\n                <button data-edit-table=\"ok\" type=\"button\">OK</button>\n                <button data-edit-table=\"cancel\" type=\"button\">\u041E\u0442\u043C\u0435\u043D\u0430</button>\n            </div>";
        node.innerHTML = null;
        node.insertAdjacentHTML('afterbegin', newInner);
    };
    // Метод для схранения нового содержимого ячейки
    EditableTable.prototype.saveNewCondition = function (newValue) {
        this._activeTd.innerHTML = newValue;
    };
    return EditableTable;
}());
