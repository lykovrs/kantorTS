class TableSorter {
    private _wrapper = null;
    private _head = null;
    private _items = null;
    private _sorted = null;
    
    constructor(table){
        if(table){
            this._wrapper = table;
            // Получаем row с заголовком таблицы
            this._head = this._wrapper.tHead.rows[0];
            // Берем все row из тела для сортировок
            this._items = this._wrapper.tBodies[0].rows;
            // Вешаем обработчик и делегируем его на ячейки по типу данных
            this._head.addEventListener('click', (event) => {
                let target = event.target;
                // Определяем вид соритировки
                let action = target.getAttribute('data-type');
                // Сортируем
                this.sortOf(action);
                // Сначала очищаем таблицу от старых данных
                this._wrapper.tBodies[0].innerHTML = '' ;
                // Затем наполнаяем отсортированными rows
                this._sorted.forEach((item)=> {
                    this._wrapper.tBodies[0].appendChild(item);
                })
            });
        }
    }

    sortOf(action:string):void {
        // Сохраняем наши rows в массив для сортировки 
        this._sorted = [].slice.call(this._items);
        // Стандартаная сортировка чисел от меньшего к большему
        if(action == 'number'){
            this._sorted.sort((a, b) => {
                return a.cells[0].innerHTML - b.cells[0].innerHTML 
            });
        } 
        // Стандартаная сортировка строк
        if(action == 'string'){
            this._sorted.sort((a, b) => {
                if(a.cells[1].innerHTML < b.cells[1].innerHTML) return -1;
                if(a.cells[1].innerHTML > b.cells[1].innerHTML) return 1;
                return 0;
            });
        } 
    }
}