let User = class {
    private _name:string;
    private _surname:string;
    static count = 0;
    constructor(name, surname){
        this._name = name;
        this._surname = surname;
        User.count++;
    };

    getFullName(){
        return `${this._name} ${this._surname}`;
    };
};

var user = new User('Ivan', 'Petrov')
console.log(user.getFullName());

class Admin extends User {
    private _admin:boolean;
    constructor(name:string, surname:string, admin:boolean){
        super(name, surname);
        this._admin = admin
    };
    getFullName(){
        return super.getFullName() + ' is admin: ' + this._admin;
    };
};

var admin = new Admin('Roman', 'Lykov', true);
console.log(admin.getFullName());

class Programmer {
    private _langs;
    constructor(...args){
        this._langs = args;
    };
    get skills(){
        return this._langs;
    };

    set skills(arr){
        this._langs = arr;
    }
};

var frontEndDeveloper = new Programmer('HTML', 'CSS', 'JavaScript');
console.log(frontEndDeveloper);

var backEndDeveloper = new Programmer('Phyton', 'Java');
console.log(backEndDeveloper.skills);

backEndDeveloper.skills = ["PHP"];
console.log(backEndDeveloper.skills);

console.log(User.count)