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
                else if (event.shiftKey) {
                    // Если зажата клавиша shift выделяем диапазон списка
                    var starElementPosition_1 = _this.selectedElements.length - 1;
                    var endElementPosition_1 = _this.list.indexOf(target);
                    var itemPosition_1 = null;
                    _this.list.forEach(function (item) {
                        // debugger
                        itemPosition_1 = _this.list.indexOf(item);
                        if (starElementPosition_1 < endElementPosition_1 && itemPosition_1 >= starElementPosition_1 && itemPosition_1 <= endElementPosition_1) {
                            _this._select(item, list);
                        }
                        if (starElementPosition_1 > endElementPosition_1 && itemPosition_1 <= starElementPosition_1 && itemPosition_1 >= endElementPosition_1) {
                            _this._select(item, list);
                        }
                    });
                    console.log(starElementPosition_1, endElementPosition_1);
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
        this.selectedElements.length = 0;
    };
    return SelectableList;
}());
