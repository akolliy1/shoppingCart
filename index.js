function createCartItem(data) {
  const container = document.createElement('div');
  container.className = 'item';
  container.innerHTML = `
		<i class="fab fa-opencart"></i>
        <h5>${data}</h5>`;
  return container;
}

document
  .querySelector('button')
  .addEventListener('click', function name(event) {
    event.preventDefault();
    const itemName = document.querySelector('input').value;
    const item = createCartItem(itemName);
    document.querySelector('article').appendChild(item);
    document.querySelector('input').value = '';
  });
