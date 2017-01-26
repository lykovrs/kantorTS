var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExClock = (function () {
    function ExClock(options) {
        this._template = null;
        this._timer = null;
        this._options = null;
        this._options = Object.create(options);
        this._template = this._options.template;
    }
    ExClock.prototype._render = function () {
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
    ExClock.prototype.stop = function () {
        clearInterval(this._timer);
    };
    ;
    ExClock.prototype.start = function () {
        var _this = this;
        this._render();
        this._timer = setInterval(function () {
            _this._render();
        }, 1000);
    };
    return ExClock;
}());
var ExtendedClock = (function (_super) {
    __extends(ExtendedClock, _super);
    function ExtendedClock(options) {
        var _this = _super.call(this, options) || this;
        _this._precision = null;
        _this._precision = options.precision;
        return _this;
    }
    ExtendedClock.prototype.start = function () {
        var _this = this;
        this._render();
        this._timer = setInterval(function () {
            _this._render();
        }, this._precision);
    };
    return ExtendedClock;
}(ExClock));
