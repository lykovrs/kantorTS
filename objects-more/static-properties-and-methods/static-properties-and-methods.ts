/**
 * Счетчик объектов
 */
class Article {
  // Создаем статические свойства
  static lastCreated = null;
  static counter = 0;

  constructor() {
    // При каждом вызове конструктора корректируем значения статических свойств
    Article.lastCreated = new Date();
    Article.counter += 1;
  }
  // Показываем результат публичным статическим методом
  public static showStats() {
     console.log(`Всего: ${Article.counter}, Последняя: ${Article.lastCreated}`);
  }
}
