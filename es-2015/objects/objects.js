var userName = 'Roman', userSurname = 'Lykov';
var user = {
    userName: userName,
    userSurname: userSurname
};
console.log(user);
var a = "Знать", b = "JavaScript,", c = "круто!";
var motto = (_a = {},
    _a[a + " " + b + "  " + c] = userName + " " + userSurname,
    _a);
console.log(motto);
var userAdmin = { name: 'Roman', isAdmin: false, surname: 'Lykov' }, visitor = { isAdmin: false, age: 31 }, admin = { isAdmin: true };
Object.assign(userAdmin, visitor, admin);
console.log(userAdmin);
var clone = Object.assign({}, userAdmin);
console.log(clone);
var _a;
