function f(x) {
    return Math.random() * x; // random для удобства тестирования
}
function makeCaching(f) {
    var _this = this;
    var cache = {};
    return function (a) {
        if (!(a in cache))
            cache[a] = f.call(_this, a);
        return cache;
    };
}
f = makeCaching(f);
var a, b;
a = f(1);
b = f(1);
alert(a == b); // true (значение закешировано)
b = f(2);
alert(a == b); // false, другой аргумент => другое значение
