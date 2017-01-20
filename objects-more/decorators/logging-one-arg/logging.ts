function work(a) {
    /* ... */ // work - произвольная функция, один аргумент
}

function makeLogging(f, log) {
  return (a) => {
    log.push(a);
    return f.call(this, a);
  }
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
    alert('Лог:' + log[i]); // "Лог:1", затем "Лог:5"
}
