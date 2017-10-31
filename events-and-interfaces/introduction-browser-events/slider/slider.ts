class Slider {
  private _collection: NodeListOf<HTMLElement> = null;
  private _leftArrow: Element = null;
  private _rightArrow: Element = null;
  private _visibleWidth: number = null;
  private _wrapperItems: HTMLElement = null;
  private _totalLeft = 0;

  constructor(slider: HTMLElement) {
    if (slider) {
      this._rightArrow = slider.getElementsByClassName("arrow-right")[0];
      this._leftArrow = slider.getElementsByClassName("arrow-left")[0];

      this._rightArrow.addEventListener("click", slider => {
        this.nextSlide();
      });
      this._leftArrow.addEventListener("click", slider => {
        this.prevSlide();
      });
      this._visibleWidth = slider.offsetWidth;
      this._collection = slider.getElementsByTagName("li");
      this._wrapperItems = slider.querySelector("ul");
      this._wrapperItems.style.width = this.getWidthCollection() + "px";
    }
  }

  nextSlide(): void {
    if (this._totalLeft - this._visibleWidth >= -this.getWidthCollection()) {
      this._wrapperItems.style.left = `${(this._totalLeft += -this
        ._visibleWidth)}px`;
    } else {
      this._totalLeft = 0;
      this._wrapperItems.style.left = 0 + "px";
    }
  }

  prevSlide(): void {
    if (this._totalLeft < 0) {
      this._wrapperItems.style.left = `${(this._totalLeft += this._visibleWidth)}px`;
    } else {
      this._totalLeft = -this.getWidthCollection() + this._visibleWidth;
      this._wrapperItems.style.left =
        -this.getWidthCollection() + this._visibleWidth + "px";
    }
  }

  getWidthCollection(): number {
    let widthCollection = 0;
    for (let item of this._collection) {
      widthCollection += item.offsetWidth;
    }
    return widthCollection;
  }
}
