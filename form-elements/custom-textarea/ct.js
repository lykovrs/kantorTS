var CustomTextarea = (function () {
    function CustomTextarea() {
        document.addEventListener('keydown', function (event) {
            console.log(event.keyCode);
        });
    }
    return CustomTextarea;
}());
