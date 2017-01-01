var SuperInput = (function () {
    function SuperInput() {
        var _this = this;
        this._inputs = null;
        this._inputs = document.querySelectorAll('[data-placeholder]');
        // Устанавливаем подсказки
        for (var _i = 0, _a = this._inputs; _i < _a.length; _i++) {
            var input = _a[_i];
            this.showPlaceholder(input);
        }
        // Устанавливаем обработчик события фокуса и делегируем событие
        document.addEventListener('focus', function (event) {
            var target = event.target;
            var text = target.dataset.placeholder;
            var value = target.value;
            target.value = '';
            // Генерируем тултип с подсказкой
            var tooltip = _this.createTooltip(text);
            // Позиционируем тултип относительно текущего элемента
            _this.positionTooltip(event, tooltip);
            document.addEventListener('blur', function (event) {
                var target = event.target;
                // Уадляем тултип при потере фокуса
                _this.removeTooltip(tooltip);
                target.value = value;
            }, true);
        }, true);
    }
    SuperInput.prototype.showPlaceholder = function (input) {
        input.classList.add('placeholder');
        input.value = input.dataset.placeholder;
    };
    SuperInput.prototype.createTooltip = function (text) {
        var tooltip = document.createElement('div');
        tooltip.innerHTML = text;
        tooltip.classList.add('placeholder-tooltip');
        document.body.appendChild(tooltip);
        return tooltip;
    };
    SuperInput.prototype.removeTooltip = function (tooltip) {
        tooltip.remove();
    };
    SuperInput.prototype.positionTooltip = function (event, tooltip) {
        var target = event.target;
        var dataLocation = target.getBoundingClientRect();
        var tooltipHeight = tooltip.offsetHeight;
        tooltip.style.top = dataLocation.top - tooltipHeight + 'px';
        tooltip.style.left = dataLocation.left + 'px';
    };
    return SuperInput;
}());
