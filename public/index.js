const btnStart = document.querySelector('#btnCadastrar');
const tableHome = document.querySelector('table');

btnStart.addEventListener('click', addUser);
window.addEventListener('load', createTable);

function addUser() {

    const inName = document.querySelector('#inpName').value;
    const inEmail = document.querySelector('#inpEmail').value;

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{"nome":"${inName}","email":"${inEmail}"}`
    };

    fetch('http://localhost:3000/usuarios', options)
        .then(() => createTable())
        .catch(err => console.error(err));
}

function createTable() {

    tableHome.innerHTML = `
    <thead>
        <tr>
            <th>#ID</th>
            <th>NOME</th>
            <th>E-MAIL</th>
            <th>EDITAR</th>
            <th>EXCLUIR</th>
        </tr>
    </thead>`;

    const options = { method: 'GET' };

    fetch('http://localhost:3000/usuarios', options)
        .then(response => response.json())
        .then(data => {

            let color = 'color1';

            data.forEach(user => {

                let trElement = document.createElement('tr');
                trElement.classList = `${color}`;

                const tdId = document.createElement('td');
                tdId.textContent = user.id;
                const tdName = document.createElement('td');
                tdName.textContent = user.nome;
                const tdEmail = document.createElement('td');
                tdEmail.textContent = user.email;
                const tdEdit = document.createElement('td');
                tdEdit.innerHTML = `<td><img onclick="editUser(${user.id})" class="edit" id="${user.id}" src="https://img.icons8.com/ios/50/000000/pencil--v1.png" /></td>`;
                const tdDelet = document.createElement('td');
                tdDelet.innerHTML = `<td><img onclick="deleteUser(${user.id})" class="delet" id="${user.id}" src="https://img.icons8.com/fluency-systems-filled/48/000000/x.png" /></td>`;

                trElement.appendChild(tdId);
                trElement.appendChild(tdName);
                trElement.appendChild(tdEmail);
                trElement.appendChild(tdEdit);
                trElement.appendChild(tdDelet);

                tableHome.appendChild(trElement);

                color == 'color1' ? color = 'color2' : color = 'color1';
            });
        })
        .catch(err => console.error(err));
}

function deleteUser(id) {

    const options = { method: 'DELETE' };

    fetch(`http://localhost:3000/usuarios/${id}`, options)
        .then(() => createTable())
        .catch(err => console.error(err));
}

function editUser(id) {

    const inName = document.querySelector('#inpName').value;
    const inEmail = document.querySelector('#inpEmail').value;

    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: `{"nome":"${inName}","email":"${inEmail}"}`
    };

    fetch(`http://localhost:3000/usuarios/${id}`, options)
        .then(() => createTable())
        .catch(err => console.error(err));
}