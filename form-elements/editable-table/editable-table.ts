class EditableTable {
    private _table:HTMLElement;
    private _activeTd = null;
    private _oldTdInner:string = null;
    private _conditionEdit:boolean = false;
    constructor(table:HTMLTableElement){
        this._table = table;

        this._table.addEventListener('click', event => {
            let target = event.target;
            while(target){
                // Перехватываем клик по ячейке
                if(target.nodeName === 'TD' && !this._conditionEdit){
                    this._conditionEdit = true;
                    // Сохраняем ссылку на активную ячейку 
                    this._activeTd = target;
                    // Сохраняем текущее содержимое
                    this._oldTdInner = target.innerHTML;
                    // Устанавливаем для ячейки состояние редактирования
                    this.causeСonditionEdit(target, this._oldTdInner);
                    // Устанавливаем фокус на поле ввода  
                    let area = target.querySelector('textarea');
                    this._activeTd.classList.add('active');
                    area.focus();
                    break;
                }

                // Обработка кликов по кнопкам
                if(target.dataset) {
                    // Подтверждение редактирования
                    if(target.dataset.editTable === 'ok') {
                        this._conditionEdit = false;
                        let area = this._activeTd.querySelector('textarea');
                        // Сохраняем новое содержимое
                        this.saveNewCondition(area.value);
                        this._activeTd.classList.remove('active');
                    }
                    // Отмена редактирования
                    if(target.dataset.editTable === 'cancel') {
                        this._conditionEdit = false;
                        // Возвращаем старое содержимое
                        this._activeTd.innerHTML = this._oldTdInner;
                        this._activeTd.classList.remove('active');
                    }
                };
                // Продолжаем всплытие
                target = target.parentNode;
            }
        })
    }
    // Метод для перехода в состояние редактирования 
    causeСonditionEdit(node, inner):void {
        let newInner = `
            <textarea style="width: ${node.clientWidth}px; height: ${node.clientHeight}px" data-edit-table="area">${inner}</textarea>
            <div class="buttons">
                <button data-edit-table="ok" type="button">OK</button>
                <button data-edit-table="cancel" type="button">Отмена</button>
            </div>`
        node.innerHTML = null;
        node.insertAdjacentHTML('afterbegin', newInner)
    }
    // Метод для схранения нового содержимого ячейки
    saveNewCondition(newValue):void {
        this._activeTd.innerHTML = newValue;
    }
}