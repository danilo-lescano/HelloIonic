var https = require('https');
var fs = require('fs');

var lista;
load();
function load(){
    fs.readFile('bestiary_refinado_2.json', function(err, data) {
        lista = JSON.parse(data);
        start();
    });
}
var cont = 0;
function start(){
    for (let i = 0; i < lista.length; i++) {
        let ds = lista[i].hp.match(/\d*d\d*/); //dados
        let ps = lista[i].hp.match(/\+\s*\d+/); //+ number
        let pn = lista[i].hp.match(/plus\s*\d+/); //plus number

        let msg = "";
        for (let j = 0; ds && j < ds.length; j++) {
            msg += " " + ds[j];
        }
        for (let j = 0; ps && j < ps.length; j++) {
            msg += " + " + ps[j].match(/\d+/)[0];
        }
        for (let j = 0; pn && j < pn.length; j++) {
            msg += " + " + pn[j].match(/\d+/)[0];
        }
        lista[i].hp = msg.trim();
    }

    save();
}

function save(){
    fs.writeFile('bestiary_refinado_3.json', JSON.stringify(lista), function(err, data) {
        if (err) throw err;
        console.log('Saved bestiary_refinado_3.json');
    });
}