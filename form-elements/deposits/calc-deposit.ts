class autoCalcDeposit {
    private _form;
    private _money;
    private _months;
    private _capitalization;
    private _rate;
   
    constructor(rate:number, form:HTMLFormElement) {
        this._rate = rate;
        this._form = form;
        this._money = this._form.elements.money;
        this._months = this._form.elements.months;
        this._capitalization = this._form.capitalization;
        // Расчет со значениями по умолчанию
        let result = this.calc();
        // Обновляем данные диаграммы
        this.updateCharts(+this._money.value, result);
 
        this._money.addEventListener('input', (event)=> {
            // Расчет от изменения суммы ввода

            result = this.calc();
            // Обновляем данные диаграммы
            this.updateCharts(+this._money.value, result);
        });

        this._money.addEventListener('keypress', (event)=> {
            // Фильтруем ввод только чисел
            if(!isNaN(+this.getChar(event))){
                return true;
            }    
            event.preventDefault();
        });
        
        this._months.addEventListener('change', (event)=> {
            // Расчет от изменения колличества месяцев
            result = this.calc();
            // Обновляем данные диаграммы
            this.updateCharts(+this._money.value, result);
        });
        
        this._capitalization.addEventListener('change', (event)=> {
            // Расчет по формуле с учетом капитализации, простой/сложный процент
            result = this.calc();
            // Обновляем данные диаграммы
            this.updateCharts(+this._money.value, result);
        });
    }

    calc():number {
        let money = +this._money.value;
        let months = +this._months.value;
        let rate = +this._rate;
        // Простой процент
        if(!this._capitalization.checked){
            return Math.round(money + money * rate * months / 12 / 100);
        };
        // Сложный процент
        return Math.round(Math.pow((1 + rate / 100 / months), months) * money);
    }
    
    // вспомогательная функция для получения символа из события keypress
    getChar(event) {
        if (event.which == null) {
            if (event.keyCode < 32) return null;
            return String.fromCharCode(event.keyCode) // IE
        }

        if (event.which != 0 && event.charCode != 0) {
            if (event.which < 32) return null;
            return String.fromCharCode(event.which) // остальные
        }

        return null; // специальная клавиша
    }

    // метод обновления 
    updateCharts(before:number, after:number) {
        let diagram = document.getElementById('diagram');
        let moneyBefore = document.getElementById('money-before'); 
        let moneyAfter = document.getElementById('money-after');
        let heightAfter = document.getElementById('height-after'); 
        moneyBefore.innerHTML = `${before}`;
        moneyAfter.innerHTML = `${after}`;
        heightAfter.style.height = `${(after / before * 100).toFixed(0)}px`;
    } 
}



