function showUser(name, registration) {
    if (name === void 0) { name = 'Гость'; }
    if (registration === void 0) { registration = false; }
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    console.log('Пользователь: ' + name + ' зарегистрирован: ' + registration + ' Дополнительная информация: ' + rest);
}
showUser();
showUser('Ivan');
showUser('Roman', true, 'Любит кодить', 'Спит мало');
var options = {
    width: 100,
    height: 200,
    color: 'blue'
};
function getOpts(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.width, width = _c === void 0 ? 50 : _c, _d = _b.height, height = _d === void 0 ? 50 : _d, _e = _b.color, color = _e === void 0 ? 'red' : _e;
    console.log(width + ' ' + height + ' ' + color);
}
getOpts();
getOpts(options);
