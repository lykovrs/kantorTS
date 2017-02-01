var SelectableList = (function () {
    function SelectableList(list) {
        var _this = this;
        this.list = [];
        this.selectedElements = [];
        var items = list.querySelectorAll('li');
        for (var i_1 = 0; i_1 < items.length; i_1++) {
            this.list.push(items[i_1]);
        }
        /**
         * Добавляем обработчик событий клика по пунктам меню
         * @param  {String} 'click'
         * @param  {Event}
         */
        document.addEventListener('click', function (event) {
            var target = event.target;
            // Обрабатываем события только по пунктам списка
            if (target.parentNode === list) {
                // Если зажата клавиша ctrl или cmd выделение не снимаем
                if (event.ctrlKey || event.metaKey) {
                    _this._select(target, list);
                }
                else if (event.shiftKey && _this.selectedElements.length) {
                    // Если зажата клавиша shift выделяем диапазон списка
                    //
                    // Предыдущий выделенный элемент
                    var startElementPosition = _this.list.indexOf(_this.selectedElements[_this.selectedElements.length - 1]);
                    // Текущий выделенный элемент
                    var endElementPosition = _this.list.indexOf(target);
                    // Выделяем от меньшей позиции до большей
                    var opt = {
                        max: Math.max(startElementPosition, endElementPosition),
                        min: Math.min(startElementPosition, endElementPosition)
                    };
                    // Устанавливаем выделение на элементе списка
                    var length_1 = _this.list.length;
                    var i_2 = 0;
                    for (i_2; i_2 < length_1; i_2 += 1) {
                        if (i_2 >= opt.min && i_2 <= opt.max) {
                            _this._select(_this.list[i_2], list);
                        }
                    }
                }
                else {
                    // В остальных случаях снимаем выделение и чистим выбранные значения
                    if (_this.selectedElements.length) {
                        _this._clearSelected();
                    }
                    _this._select(target, list);
                }
            }
        });
    }
    /**
     * Устанавливаем выделение и добавляем элемент в список выбранных
     * @param {HTMLLIElement} element Элемент, на который будет установлено выделение
     */
    SelectableList.prototype._select = function (element, list) {
        if (element.parentNode == list) {
            element.classList.add('selected');
            this.selectedElements.push(element);
        }
    };
    /**
     * Снимаем выделение с выбранных элементов и чистим очередь
     */
    SelectableList.prototype._clearSelected = function () {
        this.selectedElements.forEach(function (item) {
            item.classList.remove('selected');
        });
        // this.selectedElements.length = 0;
    };
    return SelectableList;
}());
