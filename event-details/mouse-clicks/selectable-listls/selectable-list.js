var SelectableList = (function () {
    function SelectableList(list) {
        var _this = this;
        this.list = null;
        this.list = list;
        document.addEventListener('click', function (event) {
            var element = event.target;
            if (element.parentNode == _this.list) {
                element.classList.add('selected');
            }
        });
    }
    return SelectableList;
}());
