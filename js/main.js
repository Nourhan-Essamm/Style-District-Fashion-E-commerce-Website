
// ===================================
// STYLE DISTRICT - MAIN JAVASCRIPT
// ===================================

// Get products from products.js
const allProducts = window.products || [];

// Local Storage Keys
const CART_KEY = "styleDistrictCart";
const WISHLIST_KEY = "styleDistrictWishlist";

// Get saved cart and wishlist
function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function getWishlist() {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
}

// Save cart and wishlist
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function saveWishlist(wishlist) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

// Update cart and wishlist counters
function updateHeaderCounts() {
    const cartCount = document.querySelector(".cart-count");
    const wishlistCount = document.querySelector(".wishlist-count");

    const cart = getCart();
    const wishlist = getWishlist();

    if (cartCount) {
        cartCount.textContent = cart.reduce(
            (total, item) => total + item.quantity, 0
        );
    }

    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

// Add product to cart
function addToCart(productId) {
    const product = allProducts.find(
        item => item.id === Number(productId)
    );

    if (!product) return;

    const cart = getCart();

    const existingItem = cart.find(
        item => item.id === product.id
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart(cart);
    updateHeaderCounts();

    alert(`${product.name} added to your bag!`);
}

// Add or remove product from wishlist
function toggleWishlist(productId) {
    const id = Number(productId);
    const wishlist = getWishlist();

    const index = wishlist.indexOf(id);

    if (index === -1) {
        wishlist.push(id);
        alert("Added to your wishlist!");
    } else {
        wishlist.splice(index, 1);
        alert("Removed from your wishlist!");
    }

    saveWishlist(wishlist);
    updateHeaderCounts();
}

// Create product card
function createProductCard(product) {
    const wishlist = getWishlist();
    const isFavorite = wishlist.includes(product.id);

    return `
        <div class="col-lg-3 col-md-6 mb-4">
            <div class="product-card">

                <div class="product-image">
                    <a href="product.html?id=${product.id}">
                        <img src="${product.image}"
                             alt="${product.name}">
                    </a>

                    ${product.badge ? `
                        <span class="product-badge">
                            ${product.badge}
                        </span>
                    ` : ""}

                    <button class="wishlist-btn ${isFavorite ? "active" : ""}"
                            data-product-id="${product.id}"
                            aria-label="Add to wishlist">
                        <i class="bi bi-heart${isFavorite ? "-fill" : ""}"></i>
                    </button>
                </div>

                <div class="product-info">
                    <p class="product-category">
                        ${product.category}
                    </p>

                    <h5>
                        <a href="product.html?id=${product.id}">
                            ${product.name}
                        </a>
                    </h5>

                    <div class="product-price">
                        $${product.price}
                        ${product.oldPrice ? `
                            <span class="old-price">
                                $${product.oldPrice}
                            </span>
                        ` : ""}
                    </div>

                    <button class="add-to-cart-btn"
                            data-product-id="${product.id}">
                        ADD TO BAG
                    </button>
                </div>

            </div>
        </div>
    `;
}

// Display featured products on homepage
function renderFeaturedProducts() {
    const container = document.getElementById("featured-products");

    if (!container) return;

    container.innerHTML = allProducts
        .slice(0, 4)
        .map(product => createProductCard(product))
        .join("");
}

// Handle product button clicks
document.addEventListener("click", function(event) {

    const cartButton = event.target.closest(".add-to-cart-btn");

    if (cartButton) {
        addToCart(cartButton.dataset.productId);
    }

    const wishlistButton = event.target.closest(".wishlist-btn");

    if (wishlistButton) {
        toggleWishlist(wishlistButton.dataset.productId);

        const icon = wishlistButton.querySelector("i");
        const isFavorite = getWishlist().includes(
            Number(wishlistButton.dataset.productId)
        );

        wishlistButton.classList.toggle("active", isFavorite);

        if (icon) {
            icon.className = isFavorite
                ? "bi bi-heart-fill"
                : "bi bi-heart";
        }
    }
});

// Newsletter form
const newsletterForm = document.getElementById("newsletter-form");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const message = document.getElementById("newsletter-message");

        if (message) {
            message.textContent =
                "Thank you for subscribing to Style District!";
        }

        newsletterForm.reset();
    });
}

// Back to top button
const backToTop = document.getElementById("back-to-top");

if (backToTop) {
    window.addEventListener("scroll", function() {
        backToTop.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    backToTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Initialize homepage
renderFeaturedProducts();
updateHeaderCounts();
