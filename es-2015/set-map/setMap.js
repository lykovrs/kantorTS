//Map
var admin = {
    name: 'Roman',
    surname: 'Lykov'
};
var visitor1 = {
    name: 'Ivan',
    surname: 'Ivanov'
};
var visitors = new Map([
    [admin, true]
]);
visitors.set(visitor1, false);
visitors.forEach(function (value, key) { return console.log(key.name + " " + value); });
//Set
var unicVisitors = new Set();
unicVisitors.add(admin);
unicVisitors.add(visitor1);
unicVisitors.add(admin);
unicVisitors.add(visitor1);
unicVisitors.add(admin);
unicVisitors.add(visitor1);
unicVisitors.forEach(function (visitor) { return console.log(visitor.name); });
