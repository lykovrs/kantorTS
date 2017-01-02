class CustomTextarea {
    private _area:HTMLElement = document.getElementById('area');
    private _view:HTMLElement = document.getElementById('view');
    private _value:string;

    constructor(){
        // Коды клавиш для сочетаний
        const PRESSED = {
                edit: 69,
                save: 83,
                cancel: 27
            }
        document.addEventListener('keydown', (event) => {
            let ctrlKey = event.ctrlKey;
            let secondKey = event.keyCode;
            // Сочетание для редактирования поля
            if(ctrlKey && secondKey == PRESSED.edit){
               event.preventDefault();
               this.editArea();
            } 
            // Сочетание для сохранения результата ввода
            if (ctrlKey && secondKey == PRESSED.save) {
               event.preventDefault();
               this.saveResult();
            }  
            // Нажатие клавиши для отмены
            if (secondKey == PRESSED.cancel) {
               event.preventDefault();
               this.cancel();
            }
        })
    }

    editArea(){
        this._area.style.display = 'block'; 
        this._view.style.display = 'none';
        this._area.focus();
    } 

    saveResult(){
        this._value = this._area.value;
        this._view.innerHTML = this._value;
        this._area.style.display = 'none'; 
        this._view.style.display = 'block';
    }

    cancel(){
        this._area.style.display = 'none'; 
        this._view.style.display = 'block';
    }   
}