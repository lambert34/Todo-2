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