class Messages {
    private _items;
    private _button;
    
    constructor(collection: HTMLCollection){
        this._items = collection;
        this.setButtons();
    }

    setButtons():void {
        for(let item of this._items){
            let button:HTMLElement = document.createElement('div');
            button.classList.add('pane__close');
            button.addEventListener('click', () => this.removeItem(item));
            item.appendChild(button);
        }  
    }

    removeItem(item):void {
        item.remove();
        console.log(item);
    }
}