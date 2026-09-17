/* ================= STATE MANAGEMENT ================= */
let cartState = [];
let favoritesState = [];
let currentCategory = 'Biryani';
let currentSubFilter = 'all';
let appliedCoupon = false;

// Customization Modal State
let currentModalDish = null;
let selectedSize = { name: 'Regular', price: 0 };
let selectedAddons = [];
let modalQty = 1;

/* ================= RICH FOOD DATABASE WITH HIGH-QUALITY BIRYANI IMAGES ================= */
const foodDatabase = {
    Biryani: [
        { id: 'bi1', name: "Hyderabadi Dum Chicken Biryani", price: 280, isVeg: false, rating: 4.9, desc: "Authentic slow-cooked saffron basmati rice layered with marinated tender chicken, fried onions & aromatic spices.", img: "images/chickendumbiryani.jpg" },
        { id: 'bi2', name: "Royal Mutton Dum Biryani", price: 390, isVeg: false, rating: 4.8, desc: "Succulent bone-in mutton pieces cooked in handi dam with aged long grain basmati rice and rich ghee.", img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80" },
        { id: 'bi3', name: "Paneer Tikka Special Biryani", price: 230, isVeg: true, rating: 4.6, desc: "Charcoal grilled marinated cottage cheese cubes cooked with fragrant biryani rice and mint gravies.", img: "https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=600&q=80" },
        { id: 'bi4', name: "Special Egg Dum Biryani", price: 199, isVeg: false, rating: 4.5, desc: "Golden fried boiled eggs tossed in spicy biryani masala gravy and dum rice.", img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=600&q=80" },
        { id: 'bi5', name: "Boneless Chicken Tikka Biryani", price: 310, isVeg: false, rating: 4.7, desc: "Juicy tandoori chicken tikka chunks layered with rich spiced saffron rice.", img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80" }
    ],
    Pizza: [
        { id: 'p1', name: "Margherita Cheese Pizza", price: 199, isVeg: true, rating: 4.6, desc: "Classic delight with 100% real mozzarella cheese & aromatic herb sauce.", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80" },
        { id: 'p2', name: "Double Cheese Burst Pizza", price: 269, isVeg: true, rating: 4.8, desc: "Loaded with liquid cheese core and topped with extra mozzarella.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80" },
        { id: 'p3', name: "Chicken Pepperoni Supreme", price: 349, isVeg: false, rating: 4.7, desc: "Loaded with spicy chicken pepperoni slices and melted cheddar.", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80" },
        { id: 'p4', name: "Farmhouse Veggie Loaded", price: 299, isVeg: true, rating: 4.5, desc: "Capsicum, crisp onion, juicy tomatoes, and fresh mushrooms.", img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80" }
    ],
    Burger: [
        { id: 'b1', name: "Crispy Veg Maharaja Burger", price: 149, isVeg: true, rating: 4.4, desc: "Double crisp corn patty layered with spicy mayo and tangy pickles.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" },
        { id: 'b2', name: "Smokey BBQ Chicken Burger", price: 199, isVeg: false, rating: 4.6, desc: "Flame grilled chicken patty smothered in signature BBQ sauce.", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80" },
        { id: 'b3', name: "Ultimate Double Cheese Burger", price: 239, isVeg: false, rating: 4.9, desc: "Dual juicy patties with double slice of melting American cheddar.", img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=80" }
    ],
    Chinese: [
        { id: 'c1', name: "Schezwan Veg Noodles", price: 160, isVeg: true, rating: 4.3, desc: "Wok-tossed noodles tossed in fiery homemade Schezwan pepper garlic sauce.", img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80" },
        { id: 'c2', name: "Crispy Chilli Chicken Gravy", price: 240, isVeg: false, rating: 4.6, desc: "Tender chicken bits wok fried with bell peppers, green chillies & soy sauce.", img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80" },
        { id: 'c3', name: "Steamed Chicken Momos (8 Pcs)", price: 170, isVeg: false, rating: 4.7, desc: "Soft Tibetan dumplings stuffed with juicy minced chicken served with spicy chutney.", img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80" }
    ],
    Indian: [
        { id: 'i1', name: "Butter Chicken Special", price: 290, isVeg: false, rating: 4.9, desc: "Rich silky tomato butter gravy infused with charcoal roasted tandoori chicken.", img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80" },
        { id: 'i2', name: "Paneer Butter Masala", price: 230, isVeg: true, rating: 4.6, desc: "Cottage cheese cubes simmered in creamy cashewnut and butter onion sauce.", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80" },
        { id: 'i3', name: "Garlic Butter Naan (2 Pcs)", price: 70, isVeg: true, rating: 4.8, desc: "Traditional clay oven baked flatbread brushed with garlic butter.", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80" }
    ],
    Desserts: [
        { id: 'd1', name: "Sizzling Chocolate Brownie", price: 150, isVeg: true, rating: 4.8, desc: "Warm fudge brownie topped with vanilla ice cream and hot chocolate fudge.", img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80" },
        { id: 'd2', name: "Gulab Jamun with Rabri", price: 110, isVeg: true, rating: 4.7, desc: "Soft golden fried khoya dumplings soaked in cardamom rose syrup.", img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80" }
    ],
    Beverages: [
        { id: 'bv1', name: "Mango Lassi Cooler", price: 90, isVeg: true, rating: 4.6, desc: "Thick chilled yogurt smoothie blended with sweet Alphonso mango pulp.", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80" },
        { id: 'bv2', name: "Cold Coffee with Ice Cream", price: 130, isVeg: true, rating: 4.7, desc: "Rich espresso blended with chilled milk and topped with vanilla scoop.", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80" }
    ]
};

/* ================= RESTAURANT DATABASE ================= */
const restaurantDatabase = [
    {
        id: 'r1',
        name: "Spice Garden",
        cuisines: "North Indian • Mughlai • Chinese",
        rating: 4.5,
        time: "25-30 min",
        priceForTwo: 300,
        offer: "50% OFF up to ₹100",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 'r2',
        name: "Food Palace & Biryani",
        cuisines: "Biryani • Hyderabadi • Kebabs",
        rating: 4.7,
        time: "20-25 min",
        priceForTwo: 350,
        offer: "Free Delivery",
        img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 'r3',
        name: "Tasty Hub Pizzeria",
        cuisines: "Italian • Pizza • Fast Food",
        rating: 4.6,
        time: "30-35 min",
        priceForTwo: 250,
        offer: "20% OFF",
        img: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 'r4',
        name: "Royal Biryani House",
        cuisines: "Biryani • Kebabs • Desserts",
        rating: 4.8,
        time: "15-25 min",
        priceForTwo: 400,
        offer: "Flat ₹120 OFF",
        img: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80"
    }
];

/* ================= INITIALIZATION ================= */
// Called by index.html once all partial HTML sections have been
// fetched and injected into the page.
function initApp() {
    renderRestaurants();
    showCategory('Biryani');
}

/* ================= RENDER FUNCTIONS ================= */
function renderRestaurants() {
    const container = document.getElementById('restaurantGrid');
    container.innerHTML = restaurantDatabase.map(r => `
        <div class="restaurant-card" onclick="openRestaurantModal('${r.id}')">
            <div class="restaurant-img-wrap">
                <img src="${r.img}" alt="${r.name}">
                <div class="offer-tag">${r.offer}</div>
            </div>
            <div class="restaurant-info">
                <div class="restaurant-name-row">
                    <h3>${r.name}</h3>
                    <div class="rating-chip">⭐ ${r.rating}</div>
                </div>
                <div class="cuisines">${r.cuisines}</div>
                <div class="restaurant-meta">
                    <span>⏱️ ${r.time}</span>
                    <span>₹${r.priceForTwo} for two</span>
                </div>
                <button class="btn-view-rest">View Menu →</button>
            </div>
        </div>
    `).join('');
}

function showCategory(category) {
    currentCategory = category;
    const optionsEl = document.getElementById('options');
    optionsEl.style.display = 'block';

    document.getElementById('optionTitle').innerText = category + " Options";
    document.getElementById('optionSubtitle').innerText = `Fresh & delicious ${category.toLowerCase()} options prepared on order`;

    renderFoodOptions();
    optionsEl.scrollIntoView({ behavior: 'smooth' });
}

function hideOptionsSection() {
    const optionsEl = document.getElementById('options');
    optionsEl.style.display = 'none';
    document.getElementById('categoriesSection').scrollIntoView({ behavior: 'smooth' });
    showToast('Returned to Categories Menu');
}

function renderFoodOptions() {
    const container = document.getElementById('optionContainer');
    let items = foodDatabase[currentCategory] || [];

    // Apply Filter
    if (currentSubFilter === 'veg') items = items.filter(i => i.isVeg);
    if (currentSubFilter === 'nonveg') items = items.filter(i => !i.isVeg);
    if (currentSubFilter === 'top') items = items.filter(i => i.rating >= 4.6);

    if (items.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--gray); padding: 30px;">No items match the selected filter.</p>`;
        return;
    }

    container.innerHTML = items.map(food => {
        const isFav = favoritesState.some(f => f.id === food.id);
        return `
            <div class="option-card">
                <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${food.id}', event)">
                    ${isFav ? '❤️' : '🤍'}
                </button>

                <!-- Dish Picture -->
                <div class="option-img-wrap">
                    <img src="${food.img}" alt="${food.name}">
                </div>

                <div class="option-card-content">
                    <div class="option-header">
                        <div>
                            <span class="${food.isVeg ? 'veg-icon' : 'nonveg-icon'}"></span>
                            <h3>${food.name}</h3>
                        </div>
                    </div>

                    <p class="option-desc">${food.desc}</p>

                    <div class="price-rating">
                        <span class="price">₹${food.price}</span>
                        <span class="rating-chip">⭐ ${food.rating}</span>
                    </div>

                    <div class="option-actions">
                        <button class="btn-add-quick" onclick="quickAddToCart('${food.id}')">+ Add</button>
                        <button class="btn-customize" onclick="openCustomizeModal('${food.id}')">Customise ⚙️</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function applySubFilter(type, btn) {
    currentSubFilter = type;
    document.querySelectorAll('.sub-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderFoodOptions();
}

/* ================= DYNAMIC SEARCH ================= */
function handleSearchInput(query) {
    const dropdown = document.getElementById('searchResultsDropdown');
    query = query.trim().toLowerCase();

    if (!query) {
        dropdown.style.display = 'none';
        return;
    }

    let matches = [];
    // Search dishes
    Object.values(foodDatabase).flat().forEach(dish => {
        if (dish.name.toLowerCase().includes(query) || dish.desc.toLowerCase().includes(query)) {
            matches.push({ type: 'Dish', name: dish.name, subtitle: `₹${dish.price} • ${dish.rating} ⭐`, img: dish.img, action: () => openCustomizeModal(dish.id) });
        }
    });

    // Search restaurants
    restaurantDatabase.forEach(r => {
        if (r.name.toLowerCase().includes(query) || r.cuisines.toLowerCase().includes(query)) {
            matches.push({ type: 'Restaurant', name: r.name, subtitle: r.cuisines, img: r.img, action: () => openRestaurantModal(r.id) });
        }
    });

    if (matches.length === 0) {
        dropdown.innerHTML = `<div style="padding: 15px; text-align: center; color: var(--gray);">No matching dishes or restaurants found.</div>`;
    } else {
        dropdown.innerHTML = matches.slice(0, 5).map((m, idx) => `
            <div class="search-item" onclick="executeSearchMatch(${idx})">
                <img src="${m.img}" alt="${m.name}">
                <div class="search-item-info">
                    <h4>${m.name} <span style="font-size: 11px; background: var(--gray-light); padding: 2px 6px; border-radius: 4px;">${m.type}</span></h4>
                    <p>${m.subtitle}</p>
                </div>
            </div>
        `).join('');
        window.currentSearchMatches = matches;
    }
    dropdown.style.display = 'block';
}

function executeSearchMatch(idx) {
    if (window.currentSearchMatches && window.currentSearchMatches[idx]) {
        window.currentSearchMatches[idx].action();
        document.getElementById('searchResultsDropdown').style.display = 'none';
    }
}

function triggerSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        handleSearchInput(query);
    }
}

function quickFilterTag(tag) {
    if (tag === 'Biryani Special') {
        showCategory('Biryani');
    } else if (tag === 'Pure Veg') {
        showCategory('Biryani');
        applySubFilter('veg', document.querySelectorAll('.sub-filter-btn')[1]);
    } else if (tag === 'Top Rated') {
        showCategory('Biryani');
        applySubFilter('top', document.querySelectorAll('.sub-filter-btn')[3]);
    } else if (tag === 'Offers') {
        scrollToSection('restaurantSection');
    }
}

/* ================= MODAL 1: CUSTOMIZATION MODAL ================= */
function openCustomizeModal(dishId) {
    const dish = Object.values(foodDatabase).flat().find(d => d.id === dishId);
    if (!dish) return;

    currentModalDish = dish;
    selectedSize = { name: 'Regular', price: 0 };
    selectedAddons = [];
    modalQty = 1;

    document.getElementById('customModalImg').src = dish.img;
    document.getElementById('customModalTitle').innerText = dish.name;
    document.getElementById('customModalDesc').innerText = dish.desc;
    document.getElementById('customModalBasePrice').innerText = `₹${dish.price}`;
    document.getElementById('customModalVegBadge').className = dish.isVeg ? 'veg-icon' : 'nonveg-icon';
    document.getElementById('modalQtyVal').innerText = modalQty;

    // Reset UI selections
    document.querySelectorAll('.radio-tile').forEach((tile, i) => {
        tile.classList.toggle('selected', i === 0);
    });
    document.querySelectorAll('.checkbox-row').forEach(row => row.classList.remove('selected'));

    updateModalPrice();
    openModal('customizeModal');
}

function selectSize(name, extraPrice, element) {
    selectedSize = { name, price: extraPrice };
    document.querySelectorAll('.radio-tile').forEach(t => t.classList.remove('selected'));
    element.classList.add('selected');
    updateModalPrice();
}

function toggleAddon(name, price, element) {
    const index = selectedAddons.findIndex(a => a.name === name);
    if (index > -1) {
        selectedAddons.splice(index, 1);
        element.classList.remove('selected');
    } else {
        selectedAddons.push({ name, price });
        element.classList.add('selected');
    }
    updateModalPrice();
}

function changeModalQty(delta) {
    modalQty = Math.max(1, modalQty + delta);
    document.getElementById('modalQtyVal').innerText = modalQty;
    updateModalPrice();
}

function updateModalPrice() {
    if (!currentModalDish) return;
    const addonTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
    const unitPrice = currentModalDish.price + selectedSize.price + addonTotal;
    const finalTotal = unitPrice * modalQty;

    document.getElementById('modalFinalPrice').innerText = `₹${finalTotal}`;
}

function confirmAddToCartFromModal() {
    if (!currentModalDish) return;

    const addonTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
    const unitPrice = currentModalDish.price + selectedSize.price + addonTotal;

    cartState.push({
        cartItemId: Date.now(),
        dishId: currentModalDish.id,
        name: currentModalDish.name,
        size: selectedSize.name,
        addons: selectedAddons.map(a => a.name),
        unitPrice: unitPrice,
        qty: modalQty,
        itemTotal: unitPrice * modalQty
    });

    updateCartBadge();
    closeModal('customizeModal');
    showToast(`✅ Added ${currentModalDish.name} to your basket!`, 'success');
}

function quickAddToCart(dishId) {
    const dish = Object.values(foodDatabase).flat().find(d => d.id === dishId);
    if (!dish) return;

    cartState.push({
        cartItemId: Date.now(),
        dishId: dish.id,
        name: dish.name,
        size: 'Regular',
        addons: [],
        unitPrice: dish.price,
        qty: 1,
        itemTotal: dish.price
    });

    updateCartBadge();
    showToast(`✅ Quick added ${dish.name}!`, 'success');
}

/* ================= MODAL 2: RESTAURANT MODAL ================= */
function openRestaurantModal(restId) {
    const r = restaurantDatabase.find(res => res.id === restId);
    if (!r) return;

    document.getElementById('restModalHeader').innerHTML = `
        <div style="display: flex; gap: 15px; align-items: center;">
            <img src="${r.img}" style="width: 80px; height: 80px; border-radius: 12px; object-fit: cover;">
            <div>
                <h2 style="font-size: 24px; font-weight: 800;">${r.name}</h2>
                <p style="color: #ccc; font-size: 13px;">${r.cuisines}</p>
                <div style="margin-top: 6px; display: flex; gap: 10px; font-size: 13px;">
                    <span class="rating-chip">⭐ ${r.rating}</span>
                    <span>⏱️ ${r.time}</span>
                    <span>🏷️ ${r.offer}</span>
                </div>
            </div>
        </div>
    `;

    // Display Biryani dishes prominently
    const dishes = [...foodDatabase.Biryani, ...foodDatabase.Indian];
    document.getElementById('restModalMenuList').innerHTML = dishes.map(d => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border: 1px solid var(--border); border-radius: 10px;">
            <div style="display: flex; gap: 12px; align-items: center;">
                <img src="${d.img}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
                <div>
                    <span class="${d.isVeg ? 'veg-icon' : 'nonveg-icon'}"></span>
                    <b style="font-size: 15px;">${d.name}</b>
                    <p style="font-size: 13px; color: var(--gray);">₹${d.price}</p>
                </div>
            </div>
            <button class="btn-add-quick" style="width: auto; padding: 6px 16px;" onclick="quickAddToCart('${d.id}')">+ Add</button>
        </div>
    `).join('');

    openModal('restaurantModal');
}

/* ================= MODAL 3: CART MODAL & CHECKOUT ================= */
function openCartModal() {
    renderCartUI();
    openModal('cartModal');
}

function renderCartUI() {
    const container = document.getElementById('cartItemsList');

    if (cartState.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 0;">
                <div style="font-size: 50px;">🛒</div>
                <h3 style="font-size: 18px; margin-top: 10px;">Your Basket is Empty</h3>
                <p style="color: var(--gray); font-size: 13px;">Add some delicious meals from the menu!</p>
            </div>
        `;
        document.getElementById('billSubtotal').innerText = '₹0';
        document.getElementById('billTotal').innerText = '₹0';
        document.getElementById('cartModalPayBtnAmount').innerText = '₹0';
        return;
    }

    container.innerHTML = cartState.map((item, idx) => `
        <div class="cart-item-row">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>Size: ${item.size} ${item.addons.length ? '• Extra: ' + item.addons.join(', ') : ''}</p>
                <b style="color: var(--primary); font-size: 14px;">₹${item.itemTotal}</b>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
                <div class="stepper">
                    <button onclick="updateCartItemQty(${idx}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="updateCartItemQty(${idx}, 1)">+</button>
                </div>
                <button onclick="removeCartItem(${idx})" style="background: none; border: none; font-size: 16px; color: var(--gray);">🗑️</button>
            </div>
        </div>
    `).join('');

    calculateBill();
}

function updateCartItemQty(index, delta) {
    cartState[index].qty += delta;
    if (cartState[index].qty <= 0) {
        cartState.splice(index, 1);
    } else {
        cartState[index].itemTotal = cartState[index].unitPrice * cartState[index].qty;
    }
    updateCartBadge();
    renderCartUI();
}

function removeCartItem(index) {
    cartState.splice(index, 1);
    updateCartBadge();
    renderCartUI();
}

function calculateBill() {
    const subtotal = cartState.reduce((sum, item) => sum + item.itemTotal, 0);
    const delivery = subtotal > 0 ? 30 : 0;
    const taxes = subtotal > 0 ? 20 : 0;
    let discount = 0;

    if (appliedCoupon) {
        discount = Math.round(subtotal * 0.5); // 50% off
        document.getElementById('couponDiscountRow').style.display = 'flex';
        document.getElementById('billDiscount').innerText = `-₹${discount}`;
    } else {
        document.getElementById('couponDiscountRow').style.display = 'none';
    }

    const total = Math.max(0, subtotal + delivery + taxes - discount);

    document.getElementById('billSubtotal').innerText = `₹${subtotal}`;
    document.getElementById('billTotal').innerText = `₹${total}`;
    document.getElementById('cartModalPayBtnAmount').innerText = `₹${total} →`;
}

function applyCoupon() {
    if (cartState.length === 0) {
        showToast('❌ Add items to cart before applying coupon!');
        return;
    }
    appliedCoupon = true;
    calculateBill();
    showToast('🎉 Promo ZOMATO50 applied! Saved 50%!', 'success');
}

function updateCartBadge() {
    const count = cartState.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartCount').innerText = count;
}

function proceedToCheckout() {
    if (cartState.length === 0) {
        showToast('❌ Cart is empty!');
        return;
    }
    closeModal('cartModal');
    openModal('trackerModal');
    simulateOrderProgress();
}

function simulateOrderProgress() {
    setTimeout(() => {
        document.getElementById('step2').className = 'tracker-step completed';
        document.getElementById('step2').querySelector('.step-circle').innerText = '✓';
        document.getElementById('step3').className = 'tracker-step active';
    }, 3000);

    setTimeout(() => {
        document.getElementById('step3').className = 'tracker-step completed';
        document.getElementById('step3').querySelector('.step-circle').innerText = '✓';
        document.getElementById('step4').className = 'tracker-step active';
    }, 6000);
}

function resetCart() {
    cartState = [];
    appliedCoupon = false;
    updateCartBadge();
}

/* ================= FAVORITES & AUTH ================= */
function toggleFavorite(dishId, event) {
    event.stopPropagation();
    const dish = Object.values(foodDatabase).flat().find(d => d.id === dishId);
    if (!dish) return;

    const index = favoritesState.findIndex(f => f.id === dishId);
    if (index > -1) {
        favoritesState.splice(index, 1);
        showToast(`Removed ${dish.name} from saved items.`);
    } else {
        favoritesState.push(dish);
        showToast(`❤️ Saved ${dish.name} to favorites!`, 'success');
    }

    document.getElementById('favCount').innerText = favoritesState.length;
    renderFoodOptions();
}

function openFavoritesModal() {
    const container = document.getElementById('favoritesList');
    if (favoritesState.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: var(--gray); padding: 20px;">No saved favorites yet! Click ❤️ on any dish to save.</p>`;
    } else {
        container.innerHTML = favoritesState.map(d => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; border-bottom: 1px solid var(--border);">
                <div style="display: flex; gap: 12px; align-items: center;">
                    <img src="${d.img}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
                    <div>
                        <b>${d.name}</b>
                        <p style="font-size: 12px; color: var(--gray);">₹${d.price}</p>
                    </div>
                </div>
                <button class="btn-add-quick" style="width: auto; padding: 6px 14px;" onclick="openCustomizeModal('${d.id}')">Order</button>
            </div>
        `).join('');
    }
    openModal('favoritesModal');
}

function openAuthModal() {
    openModal('authModal');
}

function performLogin() {
    const email = document.getElementById('authEmail').value || 'User';
    document.getElementById('userAuthBtn').innerText = `👤 ${email.split('@')[0]}`;
    closeModal('authModal');
    showToast(`👋 Welcome back, ${email.split('@')[0]}!`, 'success');
}

function openLocationModal() {
    openModal('locationModal');
}

function selectLocation(loc) {
    document.getElementById('currentLocationText').innerText = loc;
    document.getElementById('locationSectionTitle').innerText = loc.split(',')[0];
    closeModal('locationModal');
    showToast(`📍 Location set to ${loc}`);
}

/* ================= UTILS & TOASTS ================= */
function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

function showToast(message, type = '') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(id) {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}