function loadPhones() {
    var xhr = new XMLHttpRequest();
    var actionButton = document.getElementById('button');
    xhr.open('GET', 'phones.json', true);
    xhr.onreadystatechange = function () {
        var result = null;
        var htmlStr = '';
        if (xhr.readyState != 4)
            return;
        actionButton.innerHTML = 'Готово!';
        if (xhr.status != 200) {
            // обработать ошибку
            alert(xhr.status + ': ' + xhr.statusText);
        }
        else {
            // вывести результат
            result = JSON.parse(xhr.responseText);
            if (result) {
                result.forEach(function (item) {
                    htmlStr += "<li>" + item.name + "</li>";
                });
            }
            actionButton.insertAdjacentHTML('afterend', "<ul>" + htmlStr + "</ul>");
        }
    };
    xhr.send();
    actionButton.innerHTML = 'Загружаю...';
    actionButton.disabled = true;
}
