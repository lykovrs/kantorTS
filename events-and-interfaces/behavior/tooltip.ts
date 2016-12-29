interface ILocation {
    top: {
        top:number;
        left:number;
    },
    bottom: {
        top:number;
        left:number;
    }
}

class Tooltip {
    constructor(){
    //    Навешиваем обработчик на документ 
       document.addEventListener('mouseover', (event:Event)=> {
            let target:EventTarget = event.target;
            let action = target.getAttribute('data-tooltip');
            // Ловим только клики по элементам с data-tooltip
            if(action) {
                // Генерируем тултип
                let tooltip:HTMLDivElement = this.generateTooltip(action);
                // Устанавливаем относительно родителя но в body 
                this.setTooltip(tooltip, event);
                // При уводе курсора убираем тултип
                target.addEventListener('mouseout', ()=> {
                    tooltip.remove();
                });
            }
       }) 
    }

    generateTooltip (text:string):HTMLDivElement {
        let div:HTMLDivElement = document.createElement('div');
        div.className = "tooltip";
        div.innerHTML = text;
        document.body.appendChild(div);
        return div;
    }

    setTooltip(tooltip, event:Event){
        let verticalPadding:number = 5; // Отступ от между тултипом и родителем
        let target:EventTarget = event.target;
        let dataLocation = target.getBoundingClientRect();
        let tooltipHeight:number = tooltip.offsetHeight;
        let parentHeight:number = target.offsetHeight;
        let tooltipWidth:number = tooltip.offsetWidth;
        let parentWidth:number = target.offsetWidth;
        let location:ILocation = {
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
        if(event.clientY > tooltipHeight + verticalPadding){
            tooltip.style.top = location.top.top - verticalPadding + "px";
            tooltip.style.left = location.top.left + "px";
        } else {
            tooltip.style.top = location.bottom.top + verticalPadding + "px";
            tooltip.style.left = location.bottom.left + "px";
        }; 
    }
}