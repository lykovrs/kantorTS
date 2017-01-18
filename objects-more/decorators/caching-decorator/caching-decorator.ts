function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
    let cache = {};
    return (a) => {
        if (!(a in cache))
            cache[a] = f.call(this, a);
        return cache;
    }
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert(a == b); // true (значение закешировано)

b = f(2);
alert(a == b); // false, другой аргумент => другое значение
