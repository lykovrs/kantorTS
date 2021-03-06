var Tree = (function () {
    function Tree(tree) {
        var _this = this;
        if (tree) {
            this._wrapper = tree;
            this._items = this._wrapper.querySelectorAll('ul > li > span');
            this._wrapper.addEventListener('click', function (event) {
                var target = event.target;
                if (target.nodeName == 'SPAN') {
                    _this.toggleList(target);
                }
            });
        }
    }
    Tree.prototype.toggleList = function (node) {
        node.parentNode.classList.toggle('hide');
    };
    return Tree;
}());
