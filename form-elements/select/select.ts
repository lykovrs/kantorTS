interface IOption {
    text: string;
    value: string;
    defaultSelected?: boolean;
    selected?: boolean;
};

function addOption(select:HTMLSelectElement, opts:IOption[]){
   
    opts.forEach((item:IOption) => {
        select.options.add(item);
    });
};

let form:HTMLFormElement = document.forms.myForm;
let myButton:HTMLButtonElement = form.elements.addOptionButton;
let mySelect:HTMLSelectElement = form.musicSelect;
let myOption:HTMLOptionElement = new Option('Классика', 'Classic');
let myOption1:HTMLOptionElement = new Option('Pop', 'Попса');
let myOptions:IOption[] = [];
myOptions.push(myOption, myOption1);myOptions.push(myOption);

addOption(mySelect, myOptions);