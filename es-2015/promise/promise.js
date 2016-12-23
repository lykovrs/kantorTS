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
//Загрузить массив последовательно
var urls = [
    'user.json',
    'guest.json'
];
var newUrls = [];
function getItem(item) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            newUrls.push(item);
            console.log(item);
            resolve(item);
        }, 2000);
    });
}
urls.forEach(function (item, index, arr) {
    getItem(item)
        .then(function (response) {
        return getItem(arr[index + 1]);
    });
});
// httpGet(urls[0])
//   // 1. Получить данные о пользователе в JSON и передать дальше
//   .then(response => {
//     newUrls.push(response);
//     console.log(response);
//     return response;
//   });
//Promise.all( urls.map(httpGet) )
//  .then(alert);
