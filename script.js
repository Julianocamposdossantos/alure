const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const setaLeft = document.querySelector('#img_burgue');
const setaRight = document.querySelector('.toggle');
const texto = document.querySelector('.transcricao');
const mostrar = document.querySelector('.mostrar');
const escondido = document.getElementById('hidden');

setaRight.onclick = () => {

	let classes = {
		header : "mudaNav", 		
		main : "adjust"
	}

	localStorage.setItem('header', JSON.stringify(classes.header))

	localStorage.setItem('main',JSON.stringify(classes.main));

	let estilo1 = JSON.parse( localStorage.getItem('header'));

	let estilo2 = JSON.parse(localStorage.getItem('main'));

	header.classList.toggle(estilo1);
	main.classList.toggle(estilo2);
	setaRight.classList.toggle('block')

	main.classList.remove('opacity')
}


setaLeft.onclick = () => {

	let classes = {
		header : "mudaNav", 		
		main : "adjust"
	}

	header.classList.remove(classes.header);
	main.classList.remove(classes.main)
	setaRight.classList.add('block')

	classes.header = ""
	classes.main = ""

	localStorage.setItem('header', JSON.stringify(classes.header));

	main.classList.add('opacity')
}

mostrar.onclick = () => {
	escondido.classList.remove('none');
	mostrar.classList.add('hidden');
}


$(document).on("change", "#select", function(e){
	if($(this).val() == "1"){
		location.href = "../index.html"
	}

	else if($(this).val() == "2"){
		location.href = "../componentizando o sistema/projeto.html"
	}

	else if($(this).val() == "3"){
		location.href = "../estilizando/index.html"
	}

	else if($(this).val() == "4"){
		location.href = "../eventos e propriedades/index.html"
	}

	else if($(this).val() == "5"){
		location.href = "../estado e reinderizacao/projeto_final.html"
	}
});


const mode = document.querySelector('.checkbox')

function elements() {
	texto.classList.toggle('noturn');
	body.classList.toggle('noturn');	
}


mode.addEventListener('change', function() {
	if(mode.checked == true) {
		localStorage.estilo = "2"; 	
		elements();
	}
	else {
		localStorage.estilo = "1"; 
		elements();
	}
});


window.onload = () => {
	if(localStorage.estilo == "2"){
		elements();
		mode.checked = () => {}
	}
}

let estilo1 = JSON.parse( localStorage.getItem('header'));
let estilo2 = JSON.parse(localStorage.getItem('main'));

header.classList.toggle(estilo1);
main.classList.toggle(estilo2);
setaRight.classList.toggle('block');
