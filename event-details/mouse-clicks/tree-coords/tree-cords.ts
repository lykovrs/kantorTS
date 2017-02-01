class TreeCords {
    private _wrapper:HTMLElement;
    private _items:NodeList;

    constructor(tree:HTMLElement){
        if(tree){
            this._wrapper = tree;
            this._items = this._wrapper.querySelectorAll('ul > li > span');
            this._wrapper.addEventListener('click', (event:Event) => {
                let target:EventTarget = event.target;
                if(target.nodeName == 'SPAN'){
                    this.toggleList(target);
                }
            });
        }
    }

    toggleList(node:HTMLSpanElement):void {
        node.parentNode.classList.toggle('hide');
    }
}
