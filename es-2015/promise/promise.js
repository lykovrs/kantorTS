// Промисифицировать setTimeout
function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, ms);
    });
}
;
delay(1000)
    .then(function () { return alert("Hello!"); });
//Упражнения
var data = 1;
var p1 = new Promise(function (resolve, reject) {
    if (data)
        resolve('resolve');
});
var p2 = new Promise(function (resolve, reject) {
    if (data) {
        setTimeout(function () {
            resolve('timeout resolve');
        }, 2000);
    }
});
p1.then(function (data) { return console.log(data); });
p2.then(function (data) { return console.log(data); });
p2.then(function (data) {
    console.log(data += ' width then');
});
Promise.all([p1, p2]).then(console.log);
