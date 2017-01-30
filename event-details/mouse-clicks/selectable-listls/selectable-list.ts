
class SelectableList {
  public list:any = null;

  constructor(list:any){
    this.list = list;
    document.addEventListener('click', (event:any) => {
      let element = event.target;
      if(element.parentNode == this.list) {
        element.classList.add('selected') 
      }
    });
  }
}
