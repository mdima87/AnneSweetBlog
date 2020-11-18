let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.commentList');
let commentField = document.querySelector('.comment-field');
let yourName = document.querySelector('.yourName');
let yourEmail = document.querySelector('.yourEmail');
let submitButton = document.querySelector('.submit-button');

commentForm.onsubmit = function (evt) {
	evt.preventDefault ();
	let newComment = document.createElement('div');
	newComment.classList.add('comment');
	newComment.textContent = commentField.value;
	commentField.value = '';
	yourName.value = '';
	yourEmail.value = '';
	commentList.append(newComment);
};

commentField.oninput = function () {
	if (commentField.value.length < 10) {
		commentField.classList.add('warning');
		submitButton.disabled = true;
	}
	else if (commentField.value.length > 200) {
		commentField.classList.add('warning');
		submitButton.disabled = true;
	}
	else {
		commentField.classList.remove('warning');
		submitButton.disabled = false;
	};
};
