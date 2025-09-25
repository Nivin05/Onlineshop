const itemsContainer = document.getElementById('items-container');
const modal = document.getElementById('item-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const whatsappBtn = document.getElementById('whatsapp-btn');

// Your WhatsApp number
const whatsappNumber = "9567859845";

// Render items
items.forEach((item, idx) => {
  const card = document.createElement('div');
  card.className = 'item-card';
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p class="price">${item.price}</p>
  `;
  card.addEventListener('click', () => openModal(item));
  itemsContainer.appendChild(card);
});

// Modal functions
function openModal(item) {
  modal.style.display = 'block';
  modalImg.src = item.image;
  modalTitle.textContent = item.name;
  modalPrice.textContent = item.price;
  whatsappBtn.onclick = () => {
    const message = encodeURIComponent(`Hi, I'm interested in "${item.name}" (${item.price}) from your portfolio shop.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };
}

closeModalBtn.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === modal) modal.style.display = 'none';
};