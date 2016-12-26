let userName = 'Roman',
    userSurname = 'Lykov';

let user = {
    userName,
    userSurname
}
console.log(user);

let a = "Знать",
    b = "JavaScript,",
    c = "круто!"

let motto = {
    [`${a} ${b}  ${c}`] : `${userName} ${userSurname}`
};
console.log(motto);

let userAdmin = {name: 'Roman', isAdmin: false, surname: 'Lykov'},
    visitor= {isAdmin: false, age: 31},
    admin = {isAdmin: true};

Object.assign(userAdmin, visitor, admin);
console.log(userAdmin);

let clone = Object.assign({}, userAdmin);
console.log(clone);    
