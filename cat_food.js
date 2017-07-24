xhr.onload = function() {
	if (xhr.status === 200) {
		let responseObject = JSON.parse(xhr.responseText);
		let newTable = document.createElement('table');
		newTable.classList.add('table');
		newTable.innerHTML = `
				<tr class="success">
					<th>Name</th>
					<th>Breeds</th>
					<th>Type &amp; Price</th>
				</tr>
				`
		
		let content = '';
		for(let i = 0; i < responseObject.cat_brands.length; i++) {
			let tr = document.createElement('tr');
			tr.innerHTML = `
							<td>${responseObject.cat_brands[i].name}</td>
							<td>${responseObject.cat_brands[i].breeds}</td>
							<td>
								${responseObject.cat_brands[i].types[i].type}<br>
								${responseObject.cat_brands[i].types[i].price}
								${responseObject.cat_brands[i].types[i+1].type}<br>
								${responseObject.cat_brands[i].types[i+1].price}
								${responseObject.cat_brands[i].types[i+2].type}<br>
								${responseObject.cat_brands[i].types[i+2].price}
								${responseObject.cat_brands[i].types[i].type}<br>
								${responseObject.cat_brands[i].types[i].price}
							</td>
			`
			newTable.appendChild(tr);
		}


		main.appendChild(newTable);
	}
}
xhr.open('GET', 'cat_food.json');
xhr.send();