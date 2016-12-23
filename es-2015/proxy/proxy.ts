let testObj = {};

let proxy = new Proxy(testObj, {
    get(target, prop):any {
        console.log(`Чтение ${prop}`);
        return target[prop];
    },
    set(target, prop, value):boolean {
        console.log(`Запись ${prop} ${value}`);
        target[prop] = value;
        return true;
    }
});

proxy.test = 'test value';
console.log(proxy.test);
