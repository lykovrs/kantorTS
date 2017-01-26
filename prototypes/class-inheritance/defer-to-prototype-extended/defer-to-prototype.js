Function.prototype.defer = function (ms) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return setTimeout(function () {
            _this.apply(_this, args);
        }, ms);
    };
};
