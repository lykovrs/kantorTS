/**
* Конструктор, который создаёт расширяемые объекты-калькуляторы.
 */
class PowerCalculator {
  //  Храним новые методы в объекте
    private _methods = {
      "-": () => {
        return a - b;
      },
      "+": (a, b) => {
        return a + b;
      }
    };

    constructor(){

    }
    // Метод, делающий вычисления, на основе методов из объекта
    calculate(expr:string):number {
      let expression = expr.split(' ');
      let firstValue = +expression[0];
      let secondValue = +expression[2];
      let operator = expression[1];

      return this._methods[operator](firstValue, secondValue);
    }
    // Обучаем нашу функцию новым методам вычисления на лету
    addMethod(id:string, func) {
      this._methods[id] = func;
    }
}
