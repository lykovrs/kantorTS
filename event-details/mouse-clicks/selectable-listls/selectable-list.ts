class SelectableList {
    public list: HTMLLIElement[] = [];
    protected selectedElements: HTMLLIElement[] = [];

    constructor(list: HTMLUListElement) {
        let items = list.querySelectorAll('li');
        for (let i = 0; i < items.length; i++) {
            this.list.push(items[i]);
        }

        /**
         * Добавляем обработчик событий клика по пунктам меню
         * @param  {String} 'click'
         * @param  {Event}
         */
        document.addEventListener('click', (event: MouseEvent) => {
            let target: any = event.target;
            // Обрабатываем события только по пунктам списка
            if (target.parentNode === list) {
                // Если зажата клавиша ctrl или cmd выделение не снимаем
                if (event.ctrlKey || event.metaKey) {
                    this._select(target, list);
                } else if (event.shiftKey && this.selectedElements.length) {
                    // Если зажата клавиша shift выделяем диапазон списка
                    let startElementPosition = this.list.indexOf(this.selectedElements[this.selectedElements.length - 1]);
                    let endElementPosition = this.list.indexOf(target);

                    let opt = {
                      max: Math.max(startElementPosition, endElementPosition),
                      min: Math.min(startElementPosition, endElementPosition)
                    };
                    // console.log(opt)
                    debugger
                    let length = this.list.length;
                    let i = 0;
                    for (i; i < length; i+=1) {
                      // if(this.list[i] >= opt.min && this.list[i] <= opt.max) {
                        this._select(this.list[i], list);
                      // }

                    }
                    // let currentElement = this.list[opt.min];
                    // do {
                    //
                    //   currentElement = currentElement.nextSibling;
                    // } while(currentElement === this.list[opt.max])





                } else {
                    // В остальных случаях снимаем выделение и чистим выбранные значения
                    if (this.selectedElements.length) {
                        this._clearSelected();
                    }
                    this._select(target, list);
                }
            }
        });
    }
    /**
     * Устанавливаем выделение и добавляем элемент в список выбранных
     * @param {HTMLLIElement} element Элемент, на который будет установлено выделение
     */
    private _select(element: HTMLLIElement, list: HTMLUListElement): void {
        if (element.parentNode == list) {
            element.classList.add('selected');
            this.selectedElements.push(element);
        }
    }
    /**
     * Снимаем выделение с выбранных элементов и чистим очередь
     */
    private _clearSelected(): void {
        this.selectedElements.forEach((item) => {
            item.classList.remove('selected');
        })
        // this.selectedElements.length = 0;
    }
}
