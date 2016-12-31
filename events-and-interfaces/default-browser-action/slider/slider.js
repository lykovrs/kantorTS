var Slider = (function () {
    function Slider(wrapper) {
        var _this = this;
        if (wrapper) {
            this._wrapper = wrapper;
            this._imgBig = wrapper.querySelectorAll('.slider__largeImg')[0];
            // Устанавливаем обработчик клика на обертку слайдера
            this._wrapper.addEventListener('click', function (event) {
                var target = event.target;
                // Отлавливаем и обрабатываем клик только по ссылкам
                while (target) {
                    if (target.nodeName == 'A') {
                        var href = target.getAttribute('href');
                        var title = target.getAttribute('title');
                        event.preventDefault();
                        _this.setImg(href, title);
                    }
                    target = target.parentNode;
                }
            });
            // Делаем предварительную загрузку изиображений
            this.preloadImg();
        }
    }
    // Установка изображения и подписи
    Slider.prototype.setImg = function (imgUrl, title) {
        this._imgBig.setAttribute('src', imgUrl);
        this._imgBig.setAttribute('alt', title);
    };
    // Предварительная загрузка больших картинок
    Slider.prototype.preloadImg = function () {
        var imgsHref = this._wrapper.getElementsByTagName('a');
        for (var _i = 0, imgsHref_1 = imgsHref; _i < imgsHref_1.length; _i++) {
            var imgHref = imgsHref_1[_i];
            var href = imgHref.getAttribute('href');
            var img = document.createElement('img');
            img.setAttribute('src', href);
        }
    };
    return Slider;
}());
