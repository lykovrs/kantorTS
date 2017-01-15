class Calculator {
  private firstValue:number;
  private secondValue:number;
    constructor(){

    })
    // Запрашиваем 2 заначения
    read() {
      let values = prompt('Введите пару значений через пробел',  '');
      values = values.split(' ');
      this.firstValue = +values[0];
      this.secondValue = +values[1];
    }
    // Возвращаем сумму двух значений
    sum():number {
      return this.firstValue + this.secondValue;
    }
    // Возвращаем произведение двух значений
    mul():number {
      return this.firstValue * this.secondValue;
    }

}
