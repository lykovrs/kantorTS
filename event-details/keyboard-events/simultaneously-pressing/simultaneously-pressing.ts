function runOnKeys(func:Function, ...keys:number[]):void {
    let result:boolean = false;
    let pressed = {};
    // Сохраняем в объектв ключи клавиш из аргументов
    keys.forEach((item)=> {
        pressed[item] = false;
    })
    document.addEventListener('keydown', (event) => {
        let key = event.keyCode;
        // Если клавиша, которую зажали есть среди аргументов на входе,
        // отмечаем её
        if(key in pressed) {
            pressed[key] = true;
        } 
        // Получаем результат сочетания зажатых клавиш
        result = keys.every(key => {
            return pressed[key];
        });
        // При положительном результате зажатия клавиш, 
        // выполняем функцию и сбрасываем вспомогательные значения
        if(result){
            func();
            keys.forEach((item)=> {
                pressed[item] = false;
            })
        }
    })

    document.addEventListener('keyup', (event) => {
        // сборос значений, если отпустили клавишу
        keys.forEach((item)=> {
            pressed[item] = false;
        })
        result = false;
    })
}


runOnKeys(
  function() { alert("Привет!") },
  "Q".charCodeAt(0),
  "W".charCodeAt(0)
);