class Slider {
    private _collection = null;
    private _leftArrow = null;
    private _rightArrow = null;
    private _visibleWidth = null;
    private _wrapperItems = null;
    private _totalLeft = 0;
   
    constructor(slider){
        if(slider){
            this._rightArrow = slider.getElementsByClassName('arrow-right')[0];
            this._leftArrow = slider.getElementsByClassName('arrow-left')[0];
            
            this._rightArrow.addEventListener('click', (slider)=> {
                this.nextSlide()
            });
            this._leftArrow.addEventListener('click', (slider)=> {
                this.prevSlide()
            });           
            this._visibleWidth = slider.offsetWidth;
            this._collection = slider.getElementsByTagName('li')
            this._wrapperItems = slider.querySelector('ul');
            this._wrapperItems.style.width = this.getWidthCollection() + 'px';
        }        
    };
    
    nextSlide():void {
        if(this._totalLeft - this._visibleWidth >= -this.getWidthCollection()){
            this._wrapperItems.style.left = `${this._totalLeft += -this._visibleWidth}px`;
        } else {
            this._totalLeft = 0;
            this._wrapperItems.style.left = 0 + 'px'
        }
    };

    prevSlide():void {
        if(this._totalLeft < 0){
            this._wrapperItems.style.left = `${this._totalLeft += this._visibleWidth}px`;
        } else {
            this._totalLeft = -this.getWidthCollection() + this._visibleWidth;
            this._wrapperItems.style.left = -this.getWidthCollection() + this._visibleWidth + 'px'
        }
    };

    getWidthCollection():number {
        let widthCollection = 0;
        for(let item of this._collection){
           widthCollection += item.offsetWidth;
        }
        return widthCollection;
    };
}