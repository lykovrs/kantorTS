class Tree {
    private _wrapper;
    private _items;
    
    constructor(tree){
        if(tree){
            this._wrapper = tree;
            this._items = this._wrapper.querySelectorAll('ul > li > span');
            this._wrapper.addEventListener('click', (event) => {
                let target = event.target;
                if(target.nodeName == 'SPAN'){
                    this.toggleList(target);
                }
            });
        }
    }

    toggleList(node){
        node.parentNode.classList.toggle('hide');
    }
}