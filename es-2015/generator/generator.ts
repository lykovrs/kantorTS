let btnNext:HTMLElement = document.getElementById('next');
let btnPrev:HTMLElement = document.getElementById('prev');

function* generateLogger() {
    let step1 = yield 'yield 1 of 3'; 
    console.log(step1);
    let step2 = yield 'yield 2 of 3'; 
    console.log(step2);
    let step3 = yield 'yield 3 of 3'; 
    console.log(step3);
}

let logger = generateLogger();
btnNext.onclick = ()=> {
    console.log(logger.next('click next').value)
    
}