include('addNewEmployee.js');

let buttonOpen = document.querySelector('#btn-open');
let buttonClose = document.querySelector('#btn-cancel');
let popup = document.querySelector('.popup');
let employeDB = new IDBInterface('employesDB', 1);

buttonOpen.addEventListener('click', () => {
    popup.classList.add('popup-open');
});
buttonClose.addEventListener('click', () => {
    popup.classList.remove('popup-open');
});

let buttonSave = document.getElementById('btn-save')
buttonSave.addEventListener('click', () => {
    let employeData = {
        fio: document.getElementById('fio').value,
        post: document.getElementById('post').value,
        rank: document.getElementById('rank').value,
        unit: document.getElementById('unit').value,
    };
    employeDB.addEmploye(employeData);
});
