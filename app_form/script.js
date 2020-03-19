let $button = document.querySelector('.button-submit');

$button.onclick = (event) => {
	event.preventDefault();
	let $password = document.querySelector('.pass').value;
	let $passwordCheck = document.querySelector('.pass1').value;
	let $checkPass = document.querySelector('.check-pass');
	if ($password !== $passwordCheck) {
		$checkPass.innerHTML = `Паролі не співпадають`
	} else if ($password.length === 0) {
		$checkPass.innerHTML = `Введіть пароль`
	} else {
		let $form = document.querySelector('form');
		let user = {
			name: $form.elements.username.value,
			email: $form.elements.useremail.value,
			password: $form.elements.userpass.value,
			sex: $form.elements.sex.value,
			city: $form.elements.city.value,
			message: $form.elements.message.value,
		}


		if (user.sex === 'man' || user.sex === 'woman') {
			let $greatings = document.querySelector('.greatings');
			$greatings.innerHTML = `Hello the best ${user.sex} ${user.name} from ${user.city}! We send you all information on your email '${user.email}'. Good luck!`
		} else {
			$greatings.innerHTML = `Hello ${user.name} from ${user.city}! We send you all information on your email '${user.email}'. Good luck!`
		}
	}
}