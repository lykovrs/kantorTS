function sumArgs() {
    let args = [].slice.call(arguments);
    if (args.length) {
        return args.reduce((a, b) => {
            return a += b;
        })
    }
}

function sumArgs2(...args) {
    if (args.length) {
        return args.reduce((a, b) => {
            return a += b;
        })
    }
}
