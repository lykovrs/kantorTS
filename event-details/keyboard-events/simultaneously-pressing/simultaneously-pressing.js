function runOnKeys(func) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var result = false;
    var pressed = {};
    // Сохраняем в объектв ключи клавиш из аргументов
    keys.forEach(function (item) {
        pressed[item] = false;
    });
    document.addEventListener('keydown', function (event) {
        var key = event.keyCode;
        // Если клавиша, которую зажали есть среди аргументов на входе,
        // отмечаем её
        if (key in pressed) {
            pressed[key] = true;
        }
        // Получаем результат сочетания зажатых клавиш
        result = keys.every(function (key) {
            return pressed[key];
        });
        // При положительном результате зажатия клавиш, 
        // выполняем функцию и сбрасываем вспомогательные значения
        if (result) {
            func();
            keys.forEach(function (item) {
                pressed[item] = false;
            });
        }
    });
    document.addEventListener('keyup', function (event) {
        // сборос значений, если отпустили клавишу
        keys.forEach(function (item) {
            pressed[item] = false;
        });
        result = false;
    });
}
runOnKeys(function () { alert("Привет!"); }, "Q".charCodeAt(0), "W".charCodeAt(0));
