class Messages {
    private _wrapper;
    private _items;
    
    constructor(collection){
        if(collection){
            this._wrapper = collection;
            this._items = this._wrapper.querySelectorAll('.pane');
            this._wrapper.addEventListener('click', (event) => {
                let target = event.target;
                let action = target.getAttribute('data-close');

                if(action){
                    this.removeItem(target.parentNode)
                }
            });
        }
        this.setButtons();
    }

    setButtons():void {
        for(let item of this._items){
            let button:HTMLElement = document.createElement('div');
            button.classList.add('pane__close');
            button.setAttribute('data-close', 'click')
            item.appendChild(button);
        }  
    }

    removeItem(item):void {
        item.remove();
        console.log(item);
    }
}