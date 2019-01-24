var https = require('https');
var fs = require('fs');

var lista;
var newLista = [];
load();
function load(){
    fs.readFile('bestiary_refinado_3.json', function(err, data) {
        lista = JSON.parse(data);
        start();
    });
}
function start(){
    for (let i = 0; i < lista.length; i++) {
        newLista[newLista.length] = {
            name: lista[i].name,
            hp: lista[i].hp,
            initiative: lista[i].init
        };
    }

    save();
}

function save(){
    fs.writeFile('bestiary_final.json', JSON.stringify(newLista), function(err, data) {
        if (err) throw err;
        console.log('Saved bestiary_final.json');
    });
}