var TableSorter = (function () {
    function TableSorter(table1) {
        var _this = this;
        this._wrapper = null;
        this._head = null;
        this._items = null;
        this._sorted = null;
        if (table1) {
            this._wrapper = table1;
            // Получаем row с заголовком таблицы
            this._head = this._wrapper.tHead.rows[0];
            // Берем все row из тела для сортировок
            this._items = this._wrapper.tBodies[0].rows;
            // Вешаем обработчик и делегируем его на ячейки по типу данных
            this._head.addEventListener('click', function (event) {
                var target = event.target;
                // Определяем вид соритировки
                var action = target.getAttribute('data-type');
                // Сортируем
                _this.sortOf(action);
                // Сначала очищаем таблицу от старых данных
                _this._wrapper.tBodies[0].innerHTML = '';
                // Затем наполнаяем отсортированными rows
                _this._sorted.forEach(function (item) {
                    _this._wrapper.tBodies[0].appendChild(item);
                });
            });
        }
    }
    TableSorter.prototype.sortOf = function (action) {
        // Сохраняем наши rows в массив для сортировки 
        this._sorted = [].slice.call(this._items);
        // Стандартаная сортировка чисел от меньшего к большему
        if (action == 'number') {
            this._sorted.sort(function (a, b) {
                return a.cells[0].innerHTML - b.cells[0].innerHTML;
            });
        }
        // Стандартаная сортировка строк
        if (action == 'string') {
            this._sorted.sort(function (a, b) {
                if (a.cells[1].innerHTML < b.cells[1].innerHTML)
                    return -1;
                if (a.cells[1].innerHTML > b.cells[1].innerHTML)
                    return 1;
                return 0;
            });
        }
    };
    return TableSorter;
}());
