let main = document.getElementById('main');
let xhr = new XMLHttpRequest();

	xhr.onload = function() {
		if (xhr.status === 200) {
			let obj = JSON.parse(xhr.responseText);
			let newTable = document.createElement('table');
			newTable.classList.add('table');
			newTable.classList.add('table-bordered');
			newTable.innerHTML = `
				<tr class="success">
					<th>Name</th>
					<th>Type</th>
					<th>Price</th>
				</tr>
				`
			let tableData = '';
			for (let i = 0; i < obj.dog_brands.length; i++) {
				let tr1 = document.createElement('tr');
				let tr2 = document.createElement('tr');
				tr1.innerHTML = `
				<tr>
					<td rowspan="2">${obj.dog_brands[i].name}</td>
					<td>${obj.dog_brands[i].types[0].type}</td>
					<td>
						${obj.dog_brands[i].types[0].volumes[0].name}
						${obj.dog_brands[i].types[0].volumes[0].price}<br>
						${obj.dog_brands[i].types[0].volumes[1].name}
						${obj.dog_brands[i].types[0].volumes[1].price}
					</td>
				</tr>
				`
				tr2.innerHTML = `
				<tr>
					<td>${obj.dog_brands[i].types[1].type}</td>
					<td>
						${obj.dog_brands[i].types[1].volumes[0].name}
						${obj.dog_brands[i].types[1].volumes[0].price}<br>
						${obj.dog_brands[i].types[1].volumes[1].name}
						${obj.dog_brands[i].types[1].volumes[1].price}
					</td>
				</tr>
				`
				newTable.appendChild(tr1);
				newTable.appendChild(tr2);
			}
			main.appendChild(newTable);
		}
	}

	xhr.open('GET', 'dog_food.json');
	xhr.send();