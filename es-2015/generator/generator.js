var btnNext = document.getElementById('next');
var btnPrev = document.getElementById('prev');
function* generateLogger() {
    var step1 = yield 'yield 1 of 3';
    console.log(step1);
    var step2 = yield 'yield 2 of 3';
    console.log(step2);
    var step3 = yield 'yield 3 of 3';
    console.log(step3);
}
var logger = generateLogger();
btnNext.onclick = function () {
    console.log(logger.next('click next').value);
};
