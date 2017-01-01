class OnlyNum {
   public _inputs:HTMLCollection = null; 
    constructor(){
        this._inputs = document.querySelectorAll('[data-enter-only]');
        document.addEventListener('keypress', (event) => {
            let char = this.getChar(event);
            if(isNaN(char)) event.preventDefault();
        })
    }

    getChar(event) {
        if (event.which == null) {
            if (event.keyCode < 32) return null;
            return String.fromCharCode(event.keyCode) // IE
        }

        if (event.which != 0 && event.charCode != 0) {
            if (event.which < 32) return null;
            return String.fromCharCode(event.which) // остальные
        }

        return null; // специальная клавиша
    }
}



   