/**
 * Класс с геттерами/сеттерами свойств
 * fullName должно остаться свойством, а firstName/lastName – реализованы через get/set.
 */
class User {
  public fullName:string;
    constructor(fullName:string){
      this.fullName = fullName;
    })
    // Геттер для имени
    get firstName():string {
      let name = this.fullName.split(' ');
      return name[0];
    };
    // Сеттер для имени
    set firstName(name:string):void {
      let fullName = this.fullName.split(' ');
      fullName[0] = name;
      this.fullName = fullName.join(' ');
    };
    // Геттер для фамилии
    get lastName():string {
      let surname = this.fullName.split(' ');
      return surname[1];
    };
    // Сеттер для фамилии
    set lastName(surname:string):void {
      let fullName = this.fullName.split(' ');
      fullName[1] = surname;
      this.fullName = fullName.join(' ');
    };
}
