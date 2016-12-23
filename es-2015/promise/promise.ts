// Промисифицировать setTimeout
function delay(ms: number){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms)
    });
};

delay(1000)
  .then(() => alert("Hello!"));

//Упражнения
var data = 1;

var p1 = new Promise((resolve, reject) => {
    if(data) resolve('resolve');
});

var p2 = new Promise((resolve, reject) => {
    if(data) {
        setTimeout(() => {
            resolve('timeout resolve')
        }, 2000);
    } 
})

p1.then((data)=> console.log(data));
p2.then((data) => console.log(data));
p2.then((data)=> {
    console.log(data += ' width then')
});

Promise.all([p1, p2]).then(console.log);