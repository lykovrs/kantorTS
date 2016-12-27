class Menu {
    private _wrapper: HTMLElement;

    constructor(mainElement){
        this._wrapper = mainElement;
        if(this._wrapper){
            this._wrapper.addEventListener('click', () => {
                this.tooggleMenu();
            })
        }; 
    };
    
    tooggleMenu():void {
        this._wrapper.classList.toggle('menu_is_open');
    }
}