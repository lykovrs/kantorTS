class Link {
    private _wrapper;
    private _items;
    
    constructor(wrapper){
        if(wrapper){
            this._wrapper = wrapper;
            this._wrapper.addEventListener('click', (event) => {
                let target = event.target;

                while(target){
                    if(target.nodeName == 'A'){
                        let href = target.getAttribute('href');
                        console.log(href);
                        let conf = confirm('Вы действительно хотите уйти на ' + href)
                        if(!conf) event.preventDefault();
                    }

                    if("parentNode" in target){
                        target = target.parentNode
                    }
                }
            });
        }
    }  
}