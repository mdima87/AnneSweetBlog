let writeMeForm = document.querySelector('.writeMe-form');
let commentField = document.querySelector('.comment-field');
let yourName = document.querySelector('.yourName');
let yourEmail  = document.querySelector('.yourEmail');
let submitButton = document.querySelector('.submit-button');

writeMeForm.onsubmit = function (evt) {
	evt.preventDefault ();
	commentField.value = '';
	yourName.value = '';
	yourEmail.value = '';
};

commentField.oninput = function () {
	if (commentField.value.length < 10) {
		commentField.classList.add('warning');
		submitButton.disabled = true;
	}
	else if (commentField.value.length > 200) {
		commentField.classList.add('warning');
		submitButton.disabled = true;
	} else {
		commentField.classList.remove('warning');
		submitButton.disabled = false;
	}
};
