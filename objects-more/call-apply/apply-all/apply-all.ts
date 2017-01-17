function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

function applyAll(func:Function, ...args:[number]) {
  return func.apply(null, args);
}

function applyAll2() {
  let args = [].slice.call(arguments);
  if(args.length > 2 && typeof args[0] == 'function' ) {
    let func = args[0]
    return func.apply(null, args.splice(1));
  }
}
