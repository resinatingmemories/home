// ══════════════════════════════════════════════════
// STORE & CHECKOUT — Resinating Memories
// ══════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Apply auto-generated image manifest (overwrites image/images fields from products.js)
  if (typeof IMAGE_MANIFEST !== 'undefined') {
    PRODUCTS.forEach(p => {
      const folder = p.image.split('/')[1];
      const imgs = IMAGE_MANIFEST[folder];
      if (imgs && imgs.length > 0) {
        p.image  = imgs[0];
        p.images = imgs;
      }
    });
  }

  // Init EmailJS if configured
  if (typeof emailjs !== 'undefined' &&
      EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }

  // Store page
  if (document.getElementById('products-grid')) {
    renderProducts('all');
    setupCategoryButtons();
  }

  // Checkout page
  if (document.getElementById('checkout-form')) {
    renderCheckoutSummary();
    setupCheckoutForm();

    // Show setup notice if EmailJS not configured
    if (EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID') {
      const notice = document.querySelector('.setup-notice');
      if (notice) notice.style.display = 'block';
    }
  }
});

// ── Category Filter ──────────────────────────────
function setupCategoryButtons() {
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.category);
    });
  });
}

// ── Price Logic ──────────────────────────────────
function resolvePrice(product, selectedOptions) {
  for (const opt of product.options) {
    if ((opt.priceByValue || opt.key === 'size') && selectedOptions[opt.key]) {
      const choice = opt.choices?.find(c => c.value === selectedOptions[opt.key]);
      if (choice?.price !== undefined) return choice.price;
    }
  }
  return product.basePrice;
}

// ── Render Product Grid ──────────────────────────
function sortedImages(product) {
  const all = product.images ? [...product.images] : [product.image];
  return all.sort((a, b) => {
    const na = a.split('/').pop().toLowerCase();
    const nb = b.split('/').pop().toLowerCase();
    return na.localeCompare(nb, undefined, { numeric: true });
  });
}

function renderProducts(category) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const list = (category === 'all')
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === category);

  grid.innerHTML = list.map(buildProductCard).join('');
  initCarousels(grid);

  grid.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', () => handleAddToCart(btn));
  });
}

function buildProductCard(product) {
  const imgs  = sortedImages(product);
  const multi = imgs.length > 1;
  const opts  = product.options.map(opt => buildOptionHtml(opt)).join('');

  const imgHtml = imgs.map((src, i) => `
    <img class="carousel-img${i === 0 ? ' active' : ''}"
         src='${src}'
         alt="${product.nameRegular} ${product.nameItalic}"
         loading="lazy"
         onerror="this.style.display='none'">`
  ).join('');

  const navHtml = multi ? `
    <button class="carousel-btn carousel-prev" aria-label="Previous photo">&#8249;</button>
    <button class="carousel-btn carousel-next" aria-label="Next photo">&#8250;</button>
    <div class="carousel-dots">
      ${imgs.map((_, i) => `<span class="carousel-dot${i === 0 ? ' active' : ''}"></span>`).join('')}
    </div>` : '';

  return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-img-wrap">
        ${imgHtml}
        <div class="product-image-placeholder">Photo Coming Soon</div>
        ${navHtml}
      </div>
      <div class="product-info">
        <div class="product-name">
          ${product.nameRegular} <em class="italic">${product.nameItalic}</em>
        </div>
        ${product.desc ? `<div class="product-desc">${product.desc}</div>` : ''}
        <div class="product-price">From $${product.basePrice}</div>
        <div class="leaf-note">✦ Gold or Silver Leaf available — no charge</div>
        <div class="product-options">${opts}</div>
        <button class="btn-add-cart" data-product-id="${product.id}">Add to Cart</button>
      </div>
    </div>`;
}

// ── Carousel Init ─────────────────────────────────
function initCarousels(grid) {
  grid.querySelectorAll('.product-img-wrap').forEach(wrap => {
    const imgs = Array.from(wrap.querySelectorAll('.carousel-img'));
    const dots = Array.from(wrap.querySelectorAll('.carousel-dot'));
    const prev = wrap.querySelector('.carousel-prev');
    const next = wrap.querySelector('.carousel-next');
    if (!prev || imgs.length < 2) return;

    let idx = 0;

    function goTo(n) {
      imgs[idx].classList.remove('active');
      dots[idx]?.classList.remove('active');
      idx = (n + imgs.length) % imgs.length;
      imgs[idx].classList.add('active');
      dots[idx]?.classList.add('active');
    }

    prev.addEventListener('click', e => { e.stopPropagation(); goTo(idx - 1); });
    next.addEventListener('click', e => { e.stopPropagation(); goTo(idx + 1); });
  });
}

function buildOptionHtml(opt) {
  if (opt.type === 'select') {
    const defaultOpt = opt.required ? '<option value="">Select…</option>' : '';
    const choicesHtml = (opt.choices || []).map(c =>
      `<option value="${c.value}">${c.label || c.value}</option>`
    ).join('');
    return `
      <div class="option-group">
        <label>${opt.label}${opt.required ? ' <span style="color:var(--pink-dark)">*</span>' : ''}</label>
        <select data-opt-key="${opt.key}">${defaultOpt}${choicesHtml}</select>
      </div>`;
  }
  if (opt.type === 'checkbox') {
    return `
      <div class="option-group">
        <label class="option-checkbox">
          <input type="checkbox" data-opt-key="${opt.key}">
          ${opt.label}
        </label>
      </div>`;
  }
  if (opt.type === 'text') {
    return `
      <div class="option-group">
        <label>${opt.label}${opt.required ? ' <span style="color:var(--pink-dark)">*</span>' : ''}</label>
        <input type="text" data-opt-key="${opt.key}" placeholder="${opt.placeholder || ''}">
      </div>`;
  }
  return '';
}

// ── Add to Cart Handler ──────────────────────────
function handleAddToCart(btn) {
  const productId = btn.dataset.productId;
  const product   = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const card = btn.closest('.product-card');
  const selectedOptions = {};
  let valid = true;

  product.options.forEach(opt => {
    const el = card.querySelector(`[data-opt-key="${opt.key}"]`);
    if (!el) return;

    if (opt.type === 'select')   selectedOptions[opt.key] = el.value;
    if (opt.type === 'checkbox') selectedOptions[opt.key] = el.checked;
    if (opt.type === 'text')     selectedOptions[opt.key] = el.value.trim();

    // Reset error state
    if (opt.type !== 'checkbox') {
      el.style.borderColor = '';
    }

    if (opt.required && !selectedOptions[opt.key]) {
      valid = false;
      if (opt.type !== 'checkbox') el.style.borderColor = 'var(--pink-dark)';
    }
  });

  if (!valid) {
    showToast('Please fill in the required fields ↑');
    return;
  }

  const price = resolvePrice(product, selectedOptions);
  addToCart(product, selectedOptions, price);

  btn.textContent = 'Added!';
  btn.classList.add('added');
  setTimeout(() => {
    btn.textContent = 'Add to Cart';
    btn.classList.remove('added');
  }, 2000);
}

// ── Checkout Page ────────────────────────────────
function renderCheckoutSummary() {
  const container = document.getElementById('checkout-items');
  const totalEl   = document.getElementById('checkout-total');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <p style="font-style:italic;color:var(--text-light);text-align:center;padding:1.5rem 0">
        Your cart is empty. <a href="store.html" style="color:var(--brown)">Browse our products →</a>
      </p>`;
    if (totalEl) totalEl.textContent = '$0';
    return;
  }

  container.innerHTML = cart.map(item => {
    const opts = formatOptions(item.options);
    return `
      <div class="checkout-item">
        <img class="checkout-item-img"
             src='${item.product.image}'
             alt="${item.product.nameRegular}"
             onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <div class="checkout-item-placeholder" style="display:none"></div>
        <div style="flex:1;min-width:0">
          <div class="checkout-item-name">${item.product.nameRegular} <em>${item.product.nameItalic}</em></div>
          ${opts ? `<div class="checkout-item-opts">${opts}</div>` : ''}
          <div class="checkout-item-price">$${item.price}</div>
        </div>
      </div>`;
  }).join('');

  if (totalEl) totalEl.textContent = `$${getCartTotal()}`;
}

function setupCheckoutForm() {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (cart.length === 0) {
      alert('Your cart is empty. Please add items before submitting.');
      return;
    }

    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Sending your order…';
    btn.disabled = true;

    const data = Object.fromEntries(new FormData(form));

    // Build plain-text cart summary
    const cartText = cart.map((item, i) => {
      const opts = formatOptions(item.options);
      return `${i + 1}. ${item.product.nameRegular} ${item.product.nameItalic} — $${item.price}` +
             (opts ? `\n   ${opts}` : '');
    }).join('\n\n');

    const templateParams = {
      to_email:         'resinatingmemories427@gmail.com',
      customer_name:    data.name,
      customer_email:   data.email,
      customer_phone:   data.phone || 'Not provided',
      customer_address: data.address || 'Not provided',
      notes:            data.notes || 'None',
      cart_summary:     cartText,
      total:            `$${getCartTotal()}`,
      reply_to:         data.email
    };

    try {
      const isDemoMode = EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID';

      if (isDemoMode) {
        // Demo: simulate send
        await new Promise(r => setTimeout(r, 1200));
        showOrderSuccess(data.name);
      } else {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          templateParams
        );
        showOrderSuccess(data.name);
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      btn.textContent = 'Place Order';
      btn.disabled = false;
      alert(
        'There was a problem sending your order.\n' +
        'Please email us directly at resinatingmemories427@gmail.com'
      );
    }
  });
}

function showOrderSuccess(name) {
  clearCart();
  const layout  = document.querySelector('.checkout-layout');
  const success = document.getElementById('success-message');
  if (layout)  layout.classList.add('hidden');
  if (success) {
    success.style.display = 'block';
    const h2 = success.querySelector('h2');
    if (h2) h2.textContent = `Thank you, ${name}!`;
  }
}
