class BehaviorNestedTooltip {
    private _tooltips: NodeList;
    private _template: HTMLDivElement = document.createElement('div');


    constructor() {
        document.body.appendChild(this._template);
        this._template.classList.add('tooltip');

        document.addEventListener('mouseover', (event: Event) => {
            let currentElement = event.target;
            let tooltip = currentElement.dataset.tooltip;
            this._template.innerText = tooltip;

            if (tooltip) {
                this.showTemplate();
            }
        })

        document.addEventListener('mouseout', (event: Event) => {
            let currentElement = event.target;
            let tooltip = currentElement.dataset.tooltip;

            if (tooltip) {
                this.hideTemplate();
            }
        })
    }

    showTemplate() {
        this._template.style.display = 'block';
    }

    hideTemplate() {
        this._template.style.display = 'none';
    }
}
