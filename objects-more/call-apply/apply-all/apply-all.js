function sum() {
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}
function mul() {
    return [].reduce.call(arguments, function (a, b) {
        return a * b;
    });
}
function applyAll(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return func.apply(null, args);
}
function applyAll2() {
    var args = [].slice.call(arguments);
    if (args.length > 2 && typeof args[0] == 'function') {
        var func = args[0];
        return func.apply(null, args.splice(1));
    }
}
