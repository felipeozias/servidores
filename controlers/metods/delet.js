const fs = require('fs');

function delet(req, res) {

    fs.readFile('./data/index.json', (_err, _data) => {

        if (_err) { res.json('Falha na LEITURA do arquivo JSON') } else {
            const data = JSON.parse(_data);

            let userDeleted = 'Usuário não encontrado';

            data.forEach(user => {

                if (user.id == req.params.id) {
                    user.delet = true;
                    userDeleted = user;
                }
            });

            fs.writeFile('./data/index.json', JSON.stringify(data, null, 4), err => {

                err ? res.json('Falha na ESCRITA do arquivo JSON') : res.json(userDeleted);
            });
        }
    });
}

module.exports = delet;