var variable_1 = "Hola mundo en javascript";

var alcance = 10;
var pDato = document.getElementById('dato');
var dat = [];

for (var i = 0; i < alcance; i++) {
	console.log(i);
dat.push(i);
pDato.innerHTML = dat;
}

