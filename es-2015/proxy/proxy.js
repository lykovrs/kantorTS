var testObj = {};
var proxy = new Proxy(testObj, {
    get: function (target, prop) {
        console.log("\u0427\u0442\u0435\u043D\u0438\u0435 " + prop);
        return target[prop];
    },
    set: function (target, prop, value) {
        console.log("\u0417\u0430\u043F\u0438\u0441\u044C " + prop + " " + value);
        target[prop] = value;
        return true;
    }
});
proxy.test = 'test value';
console.log(proxy.test);
