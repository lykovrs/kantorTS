var Link = (function () {
    function Link(wrapper) {
        if (wrapper) {
            this._wrapper = wrapper;
            this._wrapper.addEventListener('click', function (event) {
                var target = event.target;
                while (target) {
                    if (target.nodeName == 'A') {
                        var href = target.getAttribute('href');
                        console.log(href);
                        var conf = confirm('Вы действительно хотите уйти на ' + href);
                        if (!conf)
                            event.preventDefault();
                    }
                    if ("parentNode" in target) {
                        target = target.parentNode;
                    }
                }
            });
        }
    }
    return Link;
}());
