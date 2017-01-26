var Clock = (function () {
    function Clock(options) {
        this._template = null;
        this._timer = null;
        this._options = null;
        this.stop = function () {
            clearInterval(this._timer);
        };
        this.start = function () {
            var _this = this;
            this._render();
            this._timer = setInterval(function () {
                _this._render();
            }, 1000);
        };
        this._options = Object.create(options);
        this._template = this._options.template;
    }
    Clock.prototype._render = function () {
        var output, date, hours, min, sec;
        date = new Date();
        hours = date.getHours();
        if (hours < 10)
            hours = '0' + hours;
        min = date.getMinutes();
        if (min < 10)
            min = '0' + min;
        sec = date.getSeconds();
        if (sec < 10)
            sec = '0' + sec;
        output = this._template.replace("h", "" + hours).replace("m", "" + min).replace("s", "" + sec);
        console.log(output);
    };
    return Clock;
}());
