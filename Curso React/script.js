const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const setaLeft = document.querySelector('#img_burgue');
const setaRight = document.querySelector('.toggle');
const buton = document.getElementById('button');
const texto = document.querySelector('.transcricao');
const mostrar = document.querySelector('.mostrar');
const hidden = document.getElementById('hidden');


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
}


buton.onclick = () => {
	texto.classList.add('noturn');
	body.classList.add('noturn');
}	


mostrar.onclick = () => {
	hidden.classList.remove('none');
	mostrar.classList.add('hidden');
}

$(document).on("change", "#select", function(e){
	if($(this).val() == "1"){
		location.href = "../criando o projeto/index.html"
	}

	else if($(this).val() == "2"){
		location.href = "../componentizando o sistema/index.html"
	}

	else if($(this).val() == "3"){
		location.href = "../estilizando/index.html"
	}

	else if($(this).val() == "4"){
		location.href = "../eventos e propriedades/index.html"
	}

	else if($(this).val() == "5"){
		location.href = "../estado e reinderizacao/index.html"
	}
});

let estilo1 = JSON.parse( localStorage.getItem('header'));

let estilo2 = JSON.parse(localStorage.getItem('main'));


header.classList.toggle(estilo1);
main.classList.toggle(estilo2);
setaRight.classList.toggle('block')

