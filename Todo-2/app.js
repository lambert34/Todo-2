let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let priority = document.querySelector('.todo-priority');
let form = document.querySelector('.todo-form');

priority.onclick = function () {
    priority.classList.toggle('is-important');
    if (priority.classList.contains('is-important')) {
        priority.textContent = 'Важная задача';
    } else {
        priority.textContent = 'Обычная задача'
    }
};

form.onsubmit = function(evt) {
    evt.preventDeafault();
    let newElement = document.createElement('li');
    newElement.textContent = input.value;
    input.value = '';
    if (priority.classList.contains('is-important')) {
        newElement.classList.add('is-important');
    };
    list.append(newElement);
}

priority.onclick = function () {
    priority.classList.toggle('is-important');
    if (priority.classList.contains('is-important')) {
        priority.textContent = 'Важная задача';
    } else {
        priority.textContent = 'Обычная задача'
    }
};

priority.onclick = function () {
    priority.classList.toggle('is-important');
    if (priority.classList.contains('is-important')) {
        priority.textContent = 'Важная задача';
    } else {
        priority.textContent = 'Обычная задача'
    }
};

form.onsubmit = function(evt) {
    evt.preventDeafault();
    let newElement = document.createElement('li');
    newElement.textContent = input.value;
    input.value = '';
    if (priority.classList.contains('is-important')) {
        newElement.classList.add('is-important');
    };
    list.append(newElement);
}