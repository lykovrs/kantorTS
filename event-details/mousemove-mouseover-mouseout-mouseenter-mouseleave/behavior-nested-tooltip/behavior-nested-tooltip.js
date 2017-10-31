var BehaviorNestedTooltip = (function () {
    function BehaviorNestedTooltip() {
        var _this = this;
        this._template = document.createElement('div');
        document.body.appendChild(this._template);
        this._template.classList.add('tooltip');
        document.addEventListener('mouseover', function (event) {
            var currentElement = event.target;
            var tooltip = currentElement.dataset.tooltip;
            _this._template.innerText = tooltip;
            if (tooltip) {
                _this.showTemplate();
            }
        });
        document.addEventListener('mouseout', function (event) {
            var currentElement = event.target;
            var tooltip = currentElement.dataset.tooltip;
            if (tooltip) {
                _this.hideTemplate();
            }
        });
    }
    BehaviorNestedTooltip.prototype.showTemplate = function () {
        this._template.style.display = 'block';
    };
    BehaviorNestedTooltip.prototype.hideTemplate = function () {
        this._template.style.display = 'none';
    };
    return BehaviorNestedTooltip;
}());
