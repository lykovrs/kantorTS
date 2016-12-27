interface IUser {
    name: string;
    surname: string;
}
//Map
let admin:IUser = {
    name: 'Roman',
    surname: 'Lykov'
};

let visitor1:IUser = {
    name: 'Ivan',
    surname: 'Ivanov'
};

let visitors = new Map([
    [admin, true]
]);

visitors.set(visitor1, false);

visitors.forEach((value:boolean, key:IUser)=> console.log(`${key.name} ${value}`));

//Set
let unicVisitors = new Set();

unicVisitors.add(admin);
unicVisitors.add(visitor1);
unicVisitors.add(admin);
unicVisitors.add(visitor1);
unicVisitors.add(admin);
unicVisitors.add(visitor1);

unicVisitors.forEach(visitor => console.log(visitor.name));
