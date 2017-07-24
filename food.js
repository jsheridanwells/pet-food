let xhr = new XMLHttpRequest();

xhr.onload = function() {
	if (xhr.status === 200) {
		let responseObject = JSON.parse(xhr.responseText);
		let main = document.getElementById('main');
		let message = responseObject.dog_brands[0].name + ' ';
		message += responseObject.dog_brands[0].types[0].type + ' ';
		message += responseObject.dog_brands[0].types[0].volumes[0].name + ' ';
		message += responseObject.dog_brands[0].types[0].volumes[0].price + ' ';
		main.innerHTML = message;
	}
}

xhr.open('GET', 'dog_food.json', true);
xhr.send(null);