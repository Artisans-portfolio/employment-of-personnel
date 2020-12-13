class IDBInterface {
    constructor(nameDB, versionDB) {
        let dbReq = indexedDB.open(nameDB, versionDB);
        dbReq.onupgradeneeded = (event) => {
            this.db = event.target.result;
            let employe = this.db.createObjectStore('employe', { autoIncrement: true }); // - Добавление нового хранилища в БД
            let post = this.db.createObjectStore('post', { autoIncrement: true }); // - Добавление нового хранилища в БД
            let rank = this.db.createObjectStore('rank', { autoIncrement: true }); // - Добавление нового хранилища в БД
            let unit = this.db.createObjectStore('unit', { autoIncrement: true }); // - Добавление нового хранилища в БД
        }
        dbReq.onsuccess = (event) => {
            this.db = event.target.result;
        }
        dbReq.onerror = (event) => {
            alert('error opening database ' + event.target.errorCode);
        }
    }
    addEmploye(employe) {
        let tx = this.db.transaction(['employe'], 'readwrite');
        let employeStore = tx.objectStore('employe');
        let employeData = {
            fio: document.getElementById('fio').value,
            post: document.getElementById('post').value,
            rank: document.getElementById('rank').value,
            unit: document.getElementById('unit').value,
        };
        employeStore.add(employeData);
        tx.comlpete = () => { console.log('Operation complete'); };
        tx.onerror = (event) => {
            alert('error operation with DB ' + event.target.errorCode);
        };
    }
    getEmployeesList() {
        let tx = this.db.transaction(['employe'], 'readonly');
        let employeStore = tx.objectStore('employe');
    }
}