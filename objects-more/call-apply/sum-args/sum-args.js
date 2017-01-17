function sumArgs() {
    var args = [].slice.call(arguments);
    if (args.length) {
        return args.reduce(function (a, b) {
            return a += b;
        });
    }
}
function sumArgs2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length) {
        return args.reduce(function (a, b) {
            return a += b;
        });
    }
}
