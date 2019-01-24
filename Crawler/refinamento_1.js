var https = require('https');
var fs = require('fs');

var lista;
load();
function load(){
    fs.readFile('bestiary_body.json', function(err, data) {
        lista = JSON.parse(data);
        start();
    });
}
function start(){
    var cont = 0;
    for (let i = 0; i < lista.length; i++) {
        /*if(lista[i].description != ""){
            var aux = lista[i].description.split(">")[1].split("<")[0];
            if(aux == "")
                console.log(lista[i].description);
        }*/

        if(lista[i].description != "" && lista[i].statblock != "")
            cont++;
        else
            console.log(lista[i].name);
        
    }
    console.log(cont);
}