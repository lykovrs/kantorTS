let [var1, var2, var3, ...residue] = ['str1', 'str2', 'str3', 'str4', 'str5'];
console.log('first value: ' + var1,' second value: ' + var2, ' third value: ' + var3 + ' residue: ' + residue);

let user = {
    name: 'Roman',
    surname: 'Lykov'
};

let {name: userName, surname, userAge = '31'} = user;
console.log('User name: ' + userName, ' User surname: ' + surname, ' User age ' + userAge);