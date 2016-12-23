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
