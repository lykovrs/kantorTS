var Slider = (function () {
    function Slider(slider) {
        var _this = this;
        this._collection = null;
        this._leftArrow = null;
        this._rightArrow = null;
        this._visibleWidth = null;
        this._wrapperItems = null;
        this._totalLeft = 0;
        if (slider) {
            this._rightArrow = slider.getElementsByClassName('arrow-right')[0];
            this._leftArrow = slider.getElementsByClassName('arrow-left')[0];
            this._rightArrow.addEventListener('click', function (slider) {
                _this.nextSlide();
            });
            this._leftArrow.addEventListener('click', function (slider) {
                _this.prevSlide();
            });
            this._visibleWidth = slider.offsetWidth;
            this._collection = slider.getElementsByTagName('li');
            this._wrapperItems = slider.querySelector('ul');
            this._wrapperItems.style.width = this.getWidthCollection() + 'px';
        }
    }
    ;
    Slider.prototype.nextSlide = function () {
        if (this._totalLeft - this._visibleWidth >= -this.getWidthCollection()) {
            this._wrapperItems.style.left = (this._totalLeft += -this._visibleWidth) + "px";
        }
        else {
            this._totalLeft = 0;
            this._wrapperItems.style.left = 0 + 'px';
        }
    };
    ;
    Slider.prototype.prevSlide = function () {
        if (this._totalLeft < 0) {
            this._wrapperItems.style.left = (this._totalLeft += this._visibleWidth) + "px";
        }
        else {
            this._totalLeft = -this.getWidthCollection() + this._visibleWidth;
            this._wrapperItems.style.left = -this.getWidthCollection() + this._visibleWidth + 'px';
        }
    };
    ;
    Slider.prototype.getWidthCollection = function () {
        var widthCollection = 0;
        for (var _i = 0, _a = this._collection; _i < _a.length; _i++) {
            var item = _a[_i];
            widthCollection += item.offsetWidth;
        }
        return widthCollection;
    };
    ;
    return Slider;
}());
