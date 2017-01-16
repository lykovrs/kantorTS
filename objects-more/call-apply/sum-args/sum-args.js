function sumArgs() {
    var splice = [].splice;
    var args = splice.call(this, arguments);
    console.log(args);
}
