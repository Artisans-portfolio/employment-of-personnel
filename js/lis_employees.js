let employs = [
    {
        fio: "Абаев Руслан Германович",
        post: "Тшорт",
        rank: "мл. с-т",
        unit: "СУС"
    },
    {
        fio: "Перес Сальма Хаек",
        post: " Нач. вещ",
        rank: "генерал",
        unit: "PPO"
    }
];


showEmployeesList();


function createTr(employe, index){
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = index;
    td.className = "td-info";
    tr.append(td);
    for (let key in employe) {
        tr.append(createTd(employe, key));
    };
    tr.append(createBtn(index, "edit", "Редактировать"));
    tr.append(createBtn(index, "delete", "Удалить"));
    return tr;
}
function createTd(employe, key) {
    let td = document.createElement('td');
        td.className = "td-info";
        td.classList.add(key);
        td.innerHTML = employe[key];
        return td;
}
function createBtn(id, className, action) {
    let btn = document.createElement('btn');
    btn.className = "btn-" + className;
    btn.innerHTML = " " + action;
    if (action == "Редактировать") {
        btn.addEventListener('click', () => { showPopupMenu(id) });
    } else {
        btn.addEventListener('click', function () {
            confirm('Вы действительно хотите удалить данного военнослужащего');
        });
    }
    btn.id = id;
    let tdBtn = document.createElement('td');
    tdBtn.append(btn);
    tdBtn.className = "td-btn-" + className;
    return tdBtn;
}
function showEmployeesList() {
    let table = document.getElementById("mainTable");
    employs.map(function (employe, index) {
        table.append(createTr(employe, index));
    });
}
function showPopupMenu(id) {
    let employe = getEmployeDatas(id);
    let popup = document.querySelector('.popup');
    let fio = document.getElementById('fio');
    let post = document.getElementById('post');
    let rank = document.getElementById('rank');
    let unit = document.getElementById('unit');
    fio.value = employe.fio;
    post.value = employe.post;
    rank.value = employe.rank;
    post.value = employe.post;
    popup.classList.add('popup-open');
    

}
function closePopupMenu() {
    let popup = document.querySelector('.popup');
    popup.classList.remove('popup-open');
}
function getEmployeDatas(id) {
    return employs[id];
}