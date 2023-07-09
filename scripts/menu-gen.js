const container = document.querySelector('.grid-container');
const menuData = container.dataset.menu;

fetch(menuData)
  .then(response => response.json())
  .then(data => {
    data.forEach(menuItem => {
      const item = document.createElement('div');
      item.classList.add('menu-item');
      item.innerHTML = `
        <h2>${menuItem.name}</h2>
        <img src="${menuItem.image}" alt="${menuItem.name}">
        <p><strong>Ingredients:</strong> ${menuItem.ingredients.join(', ')}</p>
        <p><strong>Price:</strong> $${menuItem.price.toFixed(2)}</p>
      `;

      item.addEventListener('mouseover', () => {
        item.classList.add('zoomed');
      });

      item.addEventListener('mouseout', () => {
        item.classList.remove('zoomed');
      });

      container.appendChild(item);
    });
  })
  .catch(error => console.error(error));
