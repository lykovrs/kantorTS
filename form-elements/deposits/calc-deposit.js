var autoCalcDeposit = (function () {
    function autoCalcDeposit(rate, form) {
        var _this = this;
        this._rate = rate;
        this._form = form;
        this._money = this._form.elements.money;
        this._months = this._form.elements.months;
        this._capitalization = this._form.capitalization;
        // Расчет со значениями по умолчанию
        var result = this.calc();
        // Обновляем данные диаграммы
        this.updateCharts(+this._money.value, result);
        this._money.addEventListener('input', function (event) {
            // Расчет от изменения суммы ввода
            result = _this.calc();
            // Обновляем данные диаграммы
            _this.updateCharts(+_this._money.value, result);
        });
        this._money.addEventListener('keypress', function (event) {
            // Фильтруем ввод только чисел
            if (!isNaN(+_this.getChar(event))) {
                return true;
            }
            event.preventDefault();
        });
        this._months.addEventListener('change', function (event) {
            // Расчет от изменения колличества месяцев
            result = _this.calc();
            // Обновляем данные диаграммы
            _this.updateCharts(+_this._money.value, result);
        });
        this._capitalization.addEventListener('change', function (event) {
            // Расчет по формуле с учетом капитализации, простой/сложный процент
            result = _this.calc();
            // Обновляем данные диаграммы
            _this.updateCharts(+_this._money.value, result);
        });
    }
    autoCalcDeposit.prototype.calc = function () {
        var money = +this._money.value;
        var months = +this._months.value;
        var rate = +this._rate;
        // Простой процент
        if (!this._capitalization.checked) {
            return Math.round(money + money * rate * months / 12 / 100);
        }
        ;
        // Сложный процент
        return Math.round(Math.pow((1 + rate / 100 / months), months) * money);
    };
    // вспомогательная функция для получения символа из события keypress
    autoCalcDeposit.prototype.getChar = function (event) {
        if (event.which == null) {
            if (event.keyCode < 32)
                return null;
            return String.fromCharCode(event.keyCode); // IE
        }
        if (event.which != 0 && event.charCode != 0) {
            if (event.which < 32)
                return null;
            return String.fromCharCode(event.which); // остальные
        }
        return null; // специальная клавиша
    };
    // метод обновления 
    autoCalcDeposit.prototype.updateCharts = function (before, after) {
        var diagram = document.getElementById('diagram');
        var moneyBefore = document.getElementById('money-before');
        var moneyAfter = document.getElementById('money-after');
        var heightAfter = document.getElementById('height-after');
        moneyBefore.innerHTML = "" + before;
        moneyAfter.innerHTML = "" + after;
        heightAfter.style.height = (after / before * 100).toFixed(0) + "px";
    };
    return autoCalcDeposit;
}());
