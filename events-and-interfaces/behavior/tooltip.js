var Tooltip = (function () {
    function Tooltip() {
        var _this = this;
        //    Навешиваем обработчик на документ 
        document.addEventListener('mouseover', function (event) {
            var target = event.target;
            var action = target.getAttribute('data-tooltip');
            // Ловим только клики по элементам с data-tooltip
            if (action) {
                // Генерируем тултип
                var tooltip_1 = _this.generateTooltip(action);
                // Устанавливаем относительно родителя но в body 
                _this.setTooltip(tooltip_1, event);
                // При уводе курсора убираем тултип
                target.addEventListener('mouseout', function () {
                    tooltip_1.remove();
                });
            }
        });
    }
    Tooltip.prototype.generateTooltip = function (text) {
        var div = document.createElement('div');
        div.className = "tooltip";
        div.innerHTML = text;
        document.body.appendChild(div);
        return div;
    };
    Tooltip.prototype.setTooltip = function (tooltip, event) {
        var verticalPadding = 5; // Отступ от между тултипом и родителем
        var target = event.target;
        var dataLocation = target.getBoundingClientRect();
        var tooltipHeight = tooltip.offsetHeight;
        var parentHeight = target.offsetHeight;
        var tooltipWidth = tooltip.offsetWidth;
        var parentWidth = target.offsetWidth;
        var location = {
            top: {
                top: dataLocation.top - tooltipHeight,
                left: dataLocation.left + parentWidth / 2 - tooltipWidth / 2
            },
            bottom: {
                top: dataLocation.top + parentHeight,
                left: dataLocation.left + parentWidth / 2 - tooltipWidth / 2
            }
        };
        // Логика подъема тултипа в зависимости от расположения относительно верхнего края
        if (event.clientY > tooltipHeight + verticalPadding) {
            tooltip.style.top = location.top.top - verticalPadding + "px";
            tooltip.style.left = location.top.left + "px";
        }
        else {
            tooltip.style.top = location.bottom.top + verticalPadding + "px";
            tooltip.style.left = location.bottom.left + "px";
        }
        ;
    };
    return Tooltip;
}());
