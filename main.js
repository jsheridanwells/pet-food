let main = document.getElementById('main');
let xhr = new XMLHttpRequest();

xhr.onload = function () {
	if(xhr.status === 200) {
		let data = JSON.parse(xhr.responseText);
		let newTable = document.createElement('table');
		newTable.classList.add('table');
		let content = `<tr class="success"><td>Name</td><td>Type</td><td>Price</td></tr>`;
		for (let i = 0; i < data.dog_brands.length; i++) {
			content += `
						<tr>
							<td rowspan="2">${data.dog_brands[i].name}</td>
							<td>${data.dog_brands[i].types[0].type}</td>
							<td>
								${data.dog_brands[i].types[0].volumes[0].name}
								${data.dog_brands[i].types[0].volumes[0].price}
								${data.dog_brands[i].types[0].volumes[1].name}
								${data.dog_brands[i].types[0].volumes[1].price}
							</td>
						</tr>
						<tr>
							<td>${data.dog_brands[i].types[1].type}</td>
							<td>
								${data.dog_brands[i].types[1].volumes[0].name}
								${data.dog_brands[i].types[1].volumes[0].price}
								${data.dog_brands[i].types[1].volumes[1].name}
								${data.dog_brands[i].types[1].volumes[1].price}
							</td>
						</tr>
					`
		}
		newTable.innerHTML = content;
		main.appendChild(newTable);

	} else {
		main.innerText = 'There was a problem loading pet food data.'
	}
}

xhr.open('GET', 'dog_food.json');
xhr.send();

xhr.onload = function() {
	if (xhr.status === 200) {
		let data = JSON.parse(xhr.responseText);
		let newTable = document.createElement('table');
		newTable.classList.add('table');
		let content = `<tr class="success"><td>Name</td><td>Breeds</td><td>Prices</td></tr>`;
		for (let i = 0; i < data.cat_brands.length; i++) {
			content += `
				<tr>
					<td>${data.cat_brands[i].name}</td>
					<td>${data.cat_brands[i].breeds}</td>
					<td>
						${data.cat_brands[i].types[0].type}
						${data.cat_brands[i].types[0].price}
						${data.cat_brands[i].types[1].type}
						${data.cat_brands[i].types[1].price}
						${data.cat_brands[i].types[2].type}
						${data.cat_brands[i].types[2].price}
						${data.cat_brands[i].types[3].type}
						${data.cat_brands[i].types[3].price}

					</td>
				</tr>
			`
		}
		newTable.innerHTML = content;
		main.appendChild(newTable);
	}
}

xhr.open('GET', 'cat_food.json');
xhr.send();