var https = require('https');
var fs = require('fs');

var lista;
load();
function load(){
   // fs.readFile('bestiary_refinado_1.json', function(err, data) {
    fs.readFile('bestiary_refinado_2.json', function(err, data) {
        lista = JSON.parse(data);
        start();
    });
}
function start(){
    var cont = 0;
    for (let i = 0; i < lista.length; i++) {
        if(lista[i].hp.match(/\<.*\>/)){
            var flagL = true, flagR = true;
            var hp = "";
            for (let j = 0; j < lista[i].hp.length && (flagL || flagR); j++) {
                if(lista[i].hp[j] == "(") flagL = false;
                if(lista[i].hp[j] == ")") flagR = false;
                if(!flagL) hp += lista[i].hp[j];
            }
            lista[i].hp = hp;
            cont++;
        }
        console.log(lista[i].hp);
    }
    console.log(cont);
    save();
}

function save(){
    fs.writeFile('bestiary_refinado_2.json', JSON.stringify(lista), function(err, data) {
        if (err) throw err;
        console.log('Saved newList!');
    });
}