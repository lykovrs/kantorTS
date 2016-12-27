var hider = document.getElementById('hider');
hider.addEventListener('click', function () {
    var text = document.getElementById('text');
    text.style.display = 'none';
});
var hiderButton = document.getElementById('hiderButton');
hiderButton.addEventListener('click', function () { return hiderButton.style.display = 'none'; });
