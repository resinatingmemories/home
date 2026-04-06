// ══════════════════════════════════════════════════
// WEB3FORMS CONFIGURATION (free at web3forms.com)
//
// Setup steps:
// 1. Go to https://web3forms.com
// 2. Enter resinatingmemories427@gmail.com → Create Access Key
// 3. Copy the key from the email they send you
// 4. Paste it below
// ══════════════════════════════════════════════════
const WEB3FORMS_KEY = '6276330c-9441-4667-b52a-1f1ab18bcd60';

// ── Cart State ──────────────────────────────────
let cart = [];

function loadCart() {
  try {
    cart = JSON.parse(localStorage.getItem('rm_cart') || '[]');
  } catch (e) {
    cart = [];
  }
}

function saveCart() {
  localStorage.setItem('rm_cart', JSON.stringify(cart));
  updateCartBadges();
}

function updateCartBadges() {
  const count = cart.length;
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = count;
    b.classList.toggle('visible', count > 0);
  });
}

function addToCart(product, options, price) {
  cart.push({
    id: Date.now() + Math.random(),
    product: {
      id: product.id,
      nameRegular: product.nameRegular,
      nameItalic: product.nameItalic,
      image: product.image
    },
    options,
    price
  });
  saveCart();
  showToast(`${product.nameRegular} ${product.nameItalic} added to cart`);
}

function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  saveCart();
  renderCartDrawer();
}

function clearCart() {
  cart = [];
  saveCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

// ── Format Options for Display ──────────────────
function formatOptions(options) {
  const parts = [];
  for (const [key, val] of Object.entries(options)) {
    if (!val || val === 'None' || val === false) continue;
    if (key === 'invitation' && val === true) { parts.push('Invitation: Yes'); continue; }
    if (key === 'leafAccent') { parts.push(val); continue; }
    if (key === 'quantity')   { parts.push(val); continue; }
    if (key === 'size')       { parts.push(val); continue; }
    if (key === 'letter')     { parts.push(`Letter: ${val}`); continue; }
    if (key === 'handleColor')   { parts.push(`Handle: ${val}`); continue; }
    if (key === 'stopperColor')  { parts.push(`Stopper: ${val}`); continue; }
    parts.push(`${val}`);
  }
  return parts.join(' · ');
}

// ── Cart Drawer ─────────────────────────────────
function openCart() {
  renderCartDrawer();
  document.querySelector('.cart-overlay')?.classList.add('open');
  document.querySelector('.cart-drawer')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.querySelector('.cart-overlay')?.classList.remove('open');
  document.querySelector('.cart-drawer')?.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCartDrawer() {
  const itemsEl  = document.querySelector('.cart-items');
  const totalEl  = document.querySelector('.cart-total-amount');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        Your cart is empty.<br>
        <a href="store.html" style="color:var(--brown);font-style:normal">Browse products →</a>
      </div>`;
  } else {
    itemsEl.innerHTML = cart.map(item => {
      const opts = formatOptions(item.options);
      return `
        <div class="cart-item">
          <img class="cart-item-image"
               src='${item.product.image}'
               alt="${item.product.nameRegular}"
               onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <div class="cart-item-image-placeholder"></div>
          <div class="cart-item-details">
            <div class="cart-item-name">${item.product.nameRegular} <em>${item.product.nameItalic}</em></div>
            ${opts ? `<div class="cart-item-options">${opts}</div>` : ''}
            <div class="cart-item-price">$${item.price}</div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">×</button>
        </div>`;
    }).join('');
  }

  if (totalEl) totalEl.textContent = `$${getCartTotal()}`;
}

// ── Toast ────────────────────────────────────────
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  // force reflow to restart animation
  toast.classList.remove('show');
  void toast.offsetWidth;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── Init ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  updateCartBadges();

  // Cart open/close
  document.querySelectorAll('.nav-cart').forEach(btn =>
    btn.addEventListener('click', openCart)
  );
  document.querySelector('.cart-close')?.addEventListener('click', closeCart);
  document.querySelector('.cart-overlay')?.addEventListener('click', closeCart);

  // Mark active nav link
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html') ||
        (page === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Mobile hamburger
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks?.classList.toggle('mobile-open');
  });
});
