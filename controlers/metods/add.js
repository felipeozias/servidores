const fs = require('fs');

function add(req, res) {

    console.log(req.body);

    fs.readFile('./data/index.json', (_err, _data) => {

        if (_err) { res.json('Falha na LEITURA do arquivo JSON') } else {
 
            let data = JSON.parse(_data);

            let newUser = (JSON.parse(`{
                
                "id": ${data.length + 1},
                "nome":"${req.body.nome}",
                "email":"${req.body.email}",
                "delet": false
                
            }`));

            data.push(newUser);

            fs.writeFile('./data/index.json', JSON.stringify(data, null, 4), err => {

                err ? res.json('Falha na ESCRITA do arquivo JSON') : res.json(newUser);
            });
        }
    });
};

module.exports = add;