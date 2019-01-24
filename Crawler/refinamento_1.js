var https = require('https');
var fs = require('fs');

var lista;
var newList = [];
var defeito = [];
load();
function load(){
    fs.readFile('bestiary_body.json', function(err, data) {
        lista = JSON.parse(data);
        start();
    });
}
var erA = 0, erH = 0, erI = 0;
function start(){
    var cont = 0;
    var err = 0;
    for (let i = 0; i < lista.length; i++) {
        if(lista[i].statblock != ""){
            let init, ac, hp;
            try {
                init = lista[i].statblock.toLowerCase().split("<b>init")[1].match(/\d+/)[0];
            } catch (error) {erI++;}
            try {
                ac = lista[i].statblock.toLowerCase().split("<b>ac")[1].match(/\d+/)[0];
            } catch (error) {erA++;}
            try {
                hp = lista[i].statblock.toLowerCase().split("hp")[1].match(/\(.*\)/)[0];
            } catch (error) {erH++;}

            if(init && ac && hp){
                newList[newList.length] = {
                    name: lista[i].name,
                    ac: ac,
                    hp: hp,
                    init: init
                };
                cont++;
            }
            else{
                defeito[defeito.length] = lista[i];
                err++;
            }
        }

    }
    console.log("total: " + lista.length);
    console.log("cont: " + cont);
    console.log("erros: " + err);
    for (let i = 0; i < array.length; i++)
        console.log(defeito[i].name);
    
    //save();
}

function save(){
    fs.writeFile('bestiary_refinado_1.json', JSON.stringify(newList), function(err, data) {
        if (err) throw err;
        console.log('Saved newList!');
    });
    fs.writeFile('bestiary_erro_1.json', JSON.stringify(defeito), function(err, data) {
        if (err) throw err;
        console.log('Saved defeito!');
    });
}