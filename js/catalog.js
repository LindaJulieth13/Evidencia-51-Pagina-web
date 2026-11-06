
const products = [
  // =========================
  // PERFUMES DE CABALLERO
  // =========================
  {
    id: 1,
    name: 'Asad Bourbon',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: '',
    description: 'Una fragancia intensa y elegante, ideal para quienes buscan destacar con personalidad.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 2,
    name: 'Sauvage',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: 'img/perfumes/Sauvage.jpeg',
    description: 'Una fragancia fresca e intensa con carácter masculino y un aroma que deja huella.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 3,
    name: 'Khamrah',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: '',
    description: 'Una esencia cálida, dulce y envolvente, perfecta para ocasiones especiales.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 4,
    name: 'Al Haramain Amber Oud',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: '',
    description: 'Una fragancia sofisticada con carácter y personalidad.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 5,
    name: 'Club de Nuit Milestone',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: '',
    description: 'Una esencia elegante y distintiva para quienes disfrutan dejar una impresión memorable.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 6,
    name: 'Issey Miyake',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: '',
    description: 'Una fragancia fresca y elegante con un estilo único.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 7,
    name: 'Odyssey Bahamas',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: '',
    description: 'Un aroma fresco y atractivo para acompañarte todos los días.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 8,
    name: 'Hawas Ice',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: '',
    description: 'Una fragancia refrescante con una personalidad moderna y vibrante.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 9,
    name: 'Phantom',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: '',
    description: 'Un aroma moderno y llamativo para quienes quieren destacar.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 10,
    name: 'Go Mango',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: '',
    description: 'Una esencia frutal y fresca con un toque alegre y diferente.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 11,
    name: 'Hawas Fire',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: 'img/perfumes/HawasFire.jpeg',
    description: 'Un aroma intenso y picante con notas amaderadas que proyectan autenticidad y presencia.',
    volumen: '50 ml',
    price: 25000,
    stock: 1,
    badge: 'Destacado'
  },
  {
    id: 12,
    name: 'Mandarín Sky',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: '',
    description: 'Una fragancia llamativa y moderna para quienes disfrutan de aromas con personalidad.',
    volumen: '50 ml',
    price: 25000,
    stock: 2
  },
  {
    id: 13,
    name: 'Screed Silver',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: '',
    description: 'Una esencia elegante y versátil para diferentes ocasiones.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 14,
    name: "Black XS L'Exces",
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: '',
    description: 'Una fragancia con carácter, intensidad y un estilo atrevido.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 15,
    name: 'Khamrah 25 ml',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: '',
    description: 'Una presentación práctica de una fragancia cálida, dulce y envolvente.',
    volumen: '25 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 16,
    name: 'Tommy Men',
    gender: 'caballero',
    genderLabel: 'Caballero',
    image: '',
    description: 'Una fragancia masculina fresca y versátil para acompañar cada momento.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },

  // =========================
  // PERFUMES DE DAMA
  // =========================
  {
    id: 17,
    name: 'Eclaire Lattafa',
    gender: 'dama',
    genderLabel: 'Dama',
    image: '',
    description: 'Una fragancia dulce y envolvente, ideal para quienes aman los aromas delicados.',
    volumen: '50 ml',
    price: 25000,
    stock: 2,
    badge: 'Destacado'
  },
  {
    id: 18,
    name: 'Yara Rosada',
    gender: 'dama',
    genderLabel: 'Dama',
    image: 'img/perfumes/Yara.jpeg',
    description: 'Una fragancia femenina, delicada y dulce que transmite encanto y sofisticación.',
    volumen: '50 ml',
    price: 25000,
    stock: 1,
    badge: 'Destacado'
  },
  {
    id: 19,
    name: 'Yara Elixir',
    gender: 'dama',
    genderLabel: 'Dama',
    image: '',
    description: 'Una esencia dulce y cautivadora para quienes disfrutan de aromas especiales.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 20,
    name: 'Odyssey Pink Ponk',
    gender: 'dama',
    genderLabel: 'Dama',
    image: '',
    description: 'Una fragancia femenina con un estilo moderno, dulce y encantador.',
    volumen: '50 ml',
    price: 25000,
    stock: 2
  },
  {
    id: 21,
    name: 'Taj Escada',
    gender: 'dama',
    genderLabel: 'Dama',
    image: '',
    description: 'Una esencia alegre y llamativa para disfrutar de cada momento.',
    volumen: '50 ml',
    price: 25000,
    stock: 2
  },
  {
    id: 22,
    name: 'Thank U Next',
    gender: 'dama',
    genderLabel: 'Dama',
    image: '',
    description: 'Una fragancia juvenil y dulce con una personalidad encantadora.',
    volumen: '50 ml',
    price: 25000,
    stock: 2
  },
  {
    id: 23,
    name: 'Odyssey Candee',
    gender: 'dama',
    genderLabel: 'Dama',
    image: '',
    description: 'Un aroma dulce y divertido para quienes buscan una esencia diferente.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 24,
    name: 'Tommy Girl',
    gender: 'dama',
    genderLabel: 'Dama',
    image: '',
    description: 'Una fragancia fresca y femenina, ideal para el uso diario.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 25,
    name: 'Vulcan Baie',
    gender: 'dama',
    genderLabel: 'Dama',
    image: '',
    description: 'Una esencia llamativa y especial para quienes disfrutan destacar.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 26,
    name: 'Jean Paul La Belle',
    gender: 'dama',
    genderLabel: 'Dama',
    image: '',
    description: 'Una fragancia femenina, elegante y envolvente.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  },
  {
    id: 27,
    name: 'Good Girl',
    gender: 'dama',
    genderLabel: 'Dama',
    image: '',
    description: 'Una esencia sofisticada y sensual para dejar una impresión inolvidable.',
    volumen: '50 ml',
    price: 25000,
    stock: 1
  }
];

// Formato de precios colombianos
function moneyFormat(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(value);
}

// Imagen del producto o espacio provisional para fotografía
function createProductImage(product) {
  if (product.image) {
    return `
      <img src="${product.image}"
           alt="${product.name}"
           loading="lazy"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="product-image-placeholder" style="display:none;">
        <span>Fotografía próximamente</span>
      </div>
    `;
  }

  return `
    <div class="product-image-placeholder">
      <span>Fotografía próximamente</span>
    </div>
  `;
}

// Crear tarjeta de producto
function createProductCard(product) {
  const article = document.createElement('article');
  article.className = 'product-card';

  article.innerHTML = `
    ${createProductImage(product)}
    <div class="product-info">
      <span class="tag">${product.genderLabel}</span>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="price-row">
        <span>${product.volumen}</span>
        <strong>${moneyFormat(product.price)}</strong>
      </div>
      <button class="btn-buy" type="button" data-id="${product.id}">
        Agregar al carrito
      </button>
    </div>
  `;

  return article;
}

// Crear tarjeta para productos destacados
function createFeaturedProductCard(product) {
  const wrapper = document.createElement('div');
  wrapper.className = 'col-md-3 mb-4';

  wrapper.innerHTML = `
    <article class="product-card">
      ${createProductImage(product)}
      <div class="product-info">
        <span class="tag">${product.badge || product.genderLabel}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price-row">
          <span>${product.volumen}</span>
          <strong>${moneyFormat(product.price)}</strong>
        </div>
        <button class="btn-buy" type="button" data-id="${product.id}">
          Agregar al carrito
        </button>
      </div>
    </article>
  `;

  return wrapper;
}

// Mostrar productos por categoría
function renderProductsByGender(gender, targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = '';

  const items = products.filter(product => product.gender === gender);

  items.forEach(product => {
    container.appendChild(createProductCard(product));
  });
}

// Mostrar productos destacados en el inicio
function renderFeaturedProducts() {
  const container = document.getElementById('productos-destacados');
  if (!container) return;

  container.innerHTML = '';

  const featuredIds = [11, 2, 17, 18];
  const featured = products.filter(product =>
    featuredIds.includes(product.id)
  );

  featured.forEach(product => {
    container.appendChild(createFeaturedProductCard(product));
  });
}

// Cargar productos al abrir la página
document.addEventListener('DOMContentLoaded', () => {
  renderProductsByGender('caballero', 'caballero-grid');
  renderProductsByGender('dama', 'dama-grid');
  renderFeaturedProducts();
});

// =========================
// CARRITO + WHATSAPP
// =========================
const WHATSAPP = '573053838176';
const CART_KEY = 'lessence_carrito';

function cargarCarrito() {
  try {
    const data = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    return data.filter(item => products.some(p => p.id === item.id));
  } catch {
    return [];
  }
}

let carrito = cargarCarrito();

function guardarCarrito() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(carrito));
  } catch {}
}

function agregarAlCarrito(id) {
  const product = products.find(p => p.id === id);
  if (!product) return false;

  const item = carrito.find(i => i.id === id);

  if (item) {
    if (item.cantidad >= product.stock) {
      alert(`Solo tenemos ${product.stock} unidad(es) de ${product.name}.`);
      return false;
    }
    item.cantidad++;
  } else {
    carrito.push({ id, cantidad: 1 });
  }

  guardarCarrito();
  renderCarrito();
  return true;
}

function cambiarCantidad(id, delta) {
  const item = carrito.find(i => i.id === id);
  const product = products.find(p => p.id === id);
  if (!item || !product) return;

  const nueva = item.cantidad + delta;

  if (nueva <= 0) {
    carrito = carrito.filter(i => i.id !== id);
  } else if (nueva > product.stock) {
    alert(`Solo tenemos ${product.stock} unidad(es) de ${product.name}.`);
    return;
  } else {
    item.cantidad = nueva;
  }

  guardarCarrito();
  renderCarrito();
}

function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  renderCarrito();
}

function totalCarrito() {
  return carrito.reduce((suma, item) => {
    const p = products.find(prod => prod.id === item.id);
    return suma + p.price * item.cantidad;
  }, 0);
}

function enviarPedido() {
  if (carrito.length === 0) {
    alert('Tu carrito está vacío.');
    return;
  }

  let mensaje = 'Hola, quiero hacer este pedido:\n\n';

  carrito.forEach(item => {
    const p = products.find(prod => prod.id === item.id);
    mensaje += `• ${item.cantidad} x ${p.name} (${p.volumen}) - ${moneyFormat(p.price * item.cantidad)}\n`;
  });

  mensaje += `\n*Total: ${moneyFormat(totalCarrito())}*`;

  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

function renderCarrito() {
  const contador = document.getElementById('contador-carrito');
  const lista = document.getElementById('carrito-lista');
  const total = document.getElementById('carrito-total');
  if (!contador || !lista || !total) return;

  contador.textContent = carrito.reduce((s, i) => s + i.cantidad, 0);

  if (carrito.length === 0) {
    lista.innerHTML = '<p class="text-center text-muted my-4">Tu carrito está vacío.</p>';
    total.textContent = moneyFormat(0);
    return;
  }

  lista.innerHTML = carrito.map(item => {
    const p = products.find(prod => prod.id === item.id);
    return `
      <div class="carrito-item">
        <div class="carrito-item-info">
          <strong>${p.name}</strong>
          <small>${p.volumen} · ${moneyFormat(p.price)}</small>
        </div>
        <div class="carrito-item-controles">
          <button type="button" data-accion="menos" data-id="${p.id}">−</button>
          <span>${item.cantidad}</span>
          <button type="button" data-accion="mas" data-id="${p.id}">+</button>
        </div>
      </div>
    `;
  }).join('');

  total.textContent = moneyFormat(totalCarrito());
}

function crearInterfazCarrito() {
  if (document.getElementById('modalCarrito')) return;

  document.body.insertAdjacentHTML('beforeend', `
    <button type="button" class="carrito-flotante"
            data-bs-toggle="modal" data-bs-target="#modalCarrito">
      🛒 Carrito (<span id="contador-carrito">0</span>)
    </button>

    <div class="modal fade" id="modalCarrito" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Tu pedido</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body" id="carrito-lista"></div>
          <div class="modal-footer d-block">
            <div class="d-flex justify-content-between mb-3">
              <strong>Total</strong>
              <strong id="carrito-total">$0</strong>
            </div>
            <button type="button" class="btn btn-success w-100 mb-2" data-accion="enviar">
              Enviar pedido por WhatsApp
            </button>
            <button type="button" class="btn btn-link w-100 text-muted" data-accion="vaciar">
              Vaciar carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  `);

  renderCarrito();
}

document.addEventListener('click', e => {
  const comprar = e.target.closest('.btn-buy');
  if (comprar) {
    const agregado = agregarAlCarrito(Number(comprar.dataset.id));
    if (agregado) {
      const textoOriginal = 'Agregar al carrito';
      comprar.textContent = 'Agregado ✓';
      setTimeout(() => (comprar.textContent = textoOriginal), 1200);
    }
    return;
  }

  const accion = e.target.closest('[data-accion]');
  if (!accion) return;

  const id = Number(accion.dataset.id);

  if (accion.dataset.accion === 'mas') cambiarCantidad(id, 1);
  if (accion.dataset.accion === 'menos') cambiarCantidad(id, -1);
  if (accion.dataset.accion === 'vaciar') vaciarCarrito();
  if (accion.dataset.accion === 'enviar') enviarPedido();
});

document.addEventListener('DOMContentLoaded', crearInterfazCarrito);