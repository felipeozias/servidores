const fs = require('fs');

function list(req, res) {

    fs.readFile('./data/index.json', (_err, _data) => {

        const data = JSON.parse(_data);
        const userValid = data.filter((user) => user.delet == true ? false : true);

        res.json(userValid);
    });
}

module.exports = list;