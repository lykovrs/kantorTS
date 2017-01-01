class SuperInput {
    private _inputs:HTMLCollection = null;
    
    constructor(){
        this._inputs = document.querySelectorAll('[data-placeholder]');
        // Устанавливаем подсказки
        for(let input of this._inputs){
            this.showPlaceholder(input);
        }
        // Устанавливаем обработчик события фокуса и делегируем событие
        document.addEventListener('focus', (event:Event) => {
            let target:HTMLInputElement = event.target;
            let text:string = target.dataset.placeholder;
            let value:string = target.value;
            target.value = '';
          
            // Генерируем тултип с подсказкой
            let tooltip:HTMLDivElement = this.createTooltip(text);

            // Позиционируем тултип относительно текущего элемента
            this.positionTooltip(event, tooltip);

            document.addEventListener('blur', (event:Event) => {
                let target:HTMLDivElement = event.target;
                // Уадляем тултип при потере фокуса
                this.removeTooltip(tooltip);
                target.value = value;
            }, true);
        }, true);
    }

    showPlaceholder(input):void {
        input.classList.add('placeholder');
        input.value = input.dataset.placeholder;
    }

    createTooltip(text:string):HTMLDivElement {
        let tooltip:HTMLDivElement = document.createElement('div');
        tooltip.innerHTML = text;
        tooltip.classList.add('placeholder-tooltip');
        document.body.appendChild(tooltip);
        return tooltip;
    }

    removeTooltip(tooltip:HTMLDivElement):void {
        tooltip.remove();
    }

    positionTooltip(event:Event, tooltip:HTMLDivElement):void {
        let target:HTMLDivElement = event.target;
        let dataLocation = target.getBoundingClientRect(); 
        let tooltipHeight:number = tooltip.offsetHeight;
        tooltip.style.top =  dataLocation.top - tooltipHeight + 'px';
        tooltip.style.left = dataLocation.left + 'px';
    }
}