/**
 * Счетчик объектов
 */
var Article = (function () {
    function Article() {
        // При каждом вызове конструктора корректируем значения статических свойств
        Article.lastCreated = new Date();
        Article.counter += 1;
    }
    // Показываем результат публичным статическим методом
    Article.showStats = function () {
        console.log("\u0412\u0441\u0435\u0433\u043E: " + Article.counter + ", \u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F: " + Article.lastCreated);
    };
    // Создаем статические свойства
    Article.lastCreated = null;
    Article.counter = 0;
    return Article;
}());
