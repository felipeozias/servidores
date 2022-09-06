const fs = require('fs');

function update(req, res) {
    fs.readFile('./data/index.json', (_err, _data) => {
        const data = JSON.parse(_data);

        let userDeleted = 'Usuário não encontrado!'

        data.forEach(user => {

            if (user.id == req.params.id) {
                if (req.body.nome) { user.nome = req.body.nome };
                if (req.body.email) { user.email = req.body.email };
                userDeleted = user;
            }
        });

        fs.writeFile('./data/index.json', JSON.stringify(data, null, 4), (_erro) => {
            res.send(userDeleted);
        });
    });
}

module.exports = update;