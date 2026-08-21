const products = [
  {
    id: 1,
    name: 'HAWAS FIRE',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: 'img/perfumes/HawasFire.jpeg',
    description: 'Un aroma intenso y picante con notas amaderadas que proyectan autenticidad y presencia.',
    volumen: '50 ml',
    price: 25000,
    badge: 'Exclusivo',
  },
  {
    id: 2,
    name: 'MUSAMAN',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: 'img/perfumes/Musaman.jpeg',
    description: 'Elegante y sofisticado, ideal para quienes buscan una fragancia fresca con carácter masculino.',
    volumen: '50 ml',
    price: 25000,
    badge: 'Nuevo',
  },
  {
    id: 3,
    name: 'SAUVAGE',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: 'img/perfumes/Sauvage.jpeg',
    description: 'Fragancia masculina, fresca e intensa, con un aroma elegante y sofisticado que deja huella.',
    volumen: '50 ml',
    price: 25000
  },
  {
    id: 4,
    name: 'YARA',
    gender: 'dama',
    genderLabel: 'Dama',
    image: 'img/perfumes/Yara.jpeg',
    description: 'Floral y delicado con un toque dulce que resalta feminidad, luz y sofisticación.',
    volumen: '50 ml',
    price: 24000,
    badge: 'Más vendido',
  },
  {
    id: 5,
    name: 'Velvet Bloom',
    gender: 'dama',
    genderLabel: 'Dama',
    image: 'img/perfumes/Yara.jpeg',
    description: 'Una fragancia femenina con notas suaves y envolventes, perfecta para cada día.',
    volumen: '50 ml',
    price: 27000
  },
  {
    id: 6,
    name: 'Noir Aura',
    gender: 'dama',
    genderLabel: 'Dama',
    image: 'img/perfumes/Musaman.jpeg',
    description: 'Un perfume elegante con matices sensuales y un toque moderno para destacar siempre.',
    volumen: '50 ml',
    price: 29000
  },
  {
    id: 7,
    name: 'Lacoste Red',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: 'img/perfumes/hawas-fire.jpeg',
    description: 'Un aroma intenso y picante con notas amaderadas que proyectan autenticidad y presencia.',
    volumen: '50 ml',
    price: 25000
  },
   {
    id: 8,
    name: 'Lacoste Red',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: 'img/perfumes/hawas-fire.jpeg',
    description: 'Un aroma intenso y picante con notas amaderadas que proyectan autenticidad y presencia.',
    volumen: '50 ml',
    price: 25000
  },
   {
    id: 9,
    name: 'Lacoste Red',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: 'img/perfumes/hawas-fire.jpeg',
    description: 'Un aroma intenso y picante con notas amaderadas que proyectan autenticidad y presencia.',
    volumen: '50 ml',
    price: 25000
  },
   {
    id: 10,
    name: 'Lacoste Red',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: 'img/perfumes/hawas-fire.jpeg',
    description: 'Un aroma intenso y picante con notas amaderadas que proyectan autenticidad y presencia.',
    volumen: '50 ml',
    price: 25000
  },
   {
    id: 11,
    name: 'Lacoste Red',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: 'img/perfumes/hawas-fire.jpeg',
    description: 'Un aroma intenso y picante con notas amaderadas que proyectan autenticidad y presencia.',
    volumen: '50 ml',
    price: 25000
  },
    {
    id: 12,
    name: 'Noir Aura',
    gender: 'dama',
    genderLabel: 'Dama',
    image: 'img/perfumes/Musaman.jpeg',
    description: 'Un perfume elegante con matices sensuales y un toque moderno para destacar siempre.',
    volumen: '50 ml',
    price: 29000
  },
];

function moneyFormat(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(value);
}

function createProductCard(product) {
  const article = document.createElement('article');
  article.className = 'product-card col-md-3';

  article.innerHTML = `
  <article class="product-card">
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <span class="tag">${product.genderLabel}</span>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="price-row">
        <span>${product.volumen}</span>
        <strong>${moneyFormat(product.price)}</strong>
      </div>
      <button class="btn-buy">Agregar al carrito</button>
    </div>
    </article>
  `;

  return article;
}

function createFeaturedProductCard(product) {
  const wrapper = document.createElement('div');
  wrapper.className = 'col-md-3';

  wrapper.innerHTML = `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <span class="tag ${product.badgeClass || ''}">
          ${product.badge || 'Destacado'}
        </span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price-row">
          <span>${product.volumen}</span>
          <strong>${moneyFormat(product.price)}</strong>
        </div>
        <button class="btn-buy">Agregar al carrito</button>
      </div>
    </article>
  `;

  return wrapper;
}

function renderProductsByGender(gender, targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;

  const items = products.filter(product => product.gender === gender);

  items.forEach(product => {
    container.appendChild(createProductCard(product));
  });
}

function renderFeaturedProducts() {
  const container = document.getElementById('productos-destacados');
  if (!container) return;

  const featured = products.slice(0, 4);
  featured.forEach(product => {
    container.appendChild(createFeaturedProductCard(product));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProductsByGender('caballero', 'caballero-grid');
  renderProductsByGender('dama', 'dama-grid');
  renderFeaturedProducts();
});
