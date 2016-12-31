;
function addOption(select, opts) {
    opts.forEach(function (item) {
        select.options.add(item);
    });
}
;
var form = document.forms.myForm;
var myButton = form.elements.addOptionButton;
var mySelect = form.musicSelect;
var myOption = new Option('Классика', 'Classic');
var myOption1 = new Option('Pop', 'Попса');
var myOptions = [];
myOptions.push(myOption, myOption1);
myOptions.push(myOption);
addOption(mySelect, myOptions);
