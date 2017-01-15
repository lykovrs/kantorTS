class Accumulator {
  public value:number;

    constructor(startValue:number){
      this.value = startValue;
    })

    read(){
      this.value += +prompt("Add number", "");
    }
}
