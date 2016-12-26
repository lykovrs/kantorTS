function showUser (name = 'Гость', registration = false, ...rest):void {
    console.log('Пользователь: ' + name + ' зарегистрирован: ' + registration + ' Дополнительная информация: ' + rest);
}

showUser();
showUser('Ivan');
showUser('Roman', true, 'Любит кодить', 'Спит мало');

let options = {
    width: 100,
    height: 200,
    color: 'blue'
}

function getOpts ({width = 50, height = 50, color = 'red'} = {}) {
    console.log(width +' '+ height +' '+ color);
}

getOpts();
getOpts(options);