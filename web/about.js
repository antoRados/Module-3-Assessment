console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


let mouseOver = document.querySelector('img')

function mouseOverFunction() {
	alert('Nice pants!')
}

mouseOver.addEventListener('mouseover', mouseOverFunction)