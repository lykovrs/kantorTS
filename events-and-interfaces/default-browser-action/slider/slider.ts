class Slider {
    private _wrapper;
    private _imgBig;
    
    constructor(wrapper){
        if(wrapper){
            this._wrapper = wrapper;
            this._imgBig = wrapper.querySelectorAll('.slider__largeImg')[0];
            // Устанавливаем обработчик клика на обертку слайдера
            this._wrapper.addEventListener('click', (event) => {
                let target = event.target;
                // Отлавливаем и обрабатываем клик только по ссылкам
                while(target){
                    if(target.nodeName == 'A'){
                        let href = target.getAttribute('href');
                        let title = target.getAttribute('title');
                        event.preventDefault();
                        this.setImg(href, title);
                    }     
                    target = target.parentNode;              
                }
            });

            // Делаем предварительную загрузку изиображений
            this.preloadImg();
        }
    }  
    // Установка изображения и подписи
    setImg(imgUrl, title):void {
        this._imgBig.setAttribute('src', imgUrl);
        this._imgBig.setAttribute('alt', title);
    }
    // Предварительная загрузка больших картинок
    preloadImg() {
        let imgsHref = this._wrapper.getElementsByTagName('a');
        for(let imgHref of imgsHref){
            let href = imgHref.getAttribute('href');   
            let img = document.createElement('img');
            img.setAttribute('src', href);
        }
    }
}