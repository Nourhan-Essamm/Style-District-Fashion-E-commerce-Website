
/* =====================================
   STYLE DISTRICT - PRODUCT DATABASE
===================================== */

const products = [
    {
        id: 1,
        name: "Classic Beige Blazer",
        category: "women",
        price: 65,
        oldPrice: 85,
        badge: "BEST SELLER",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
        description: "An elegant beige blazer designed to bring effortless sophistication to your everyday wardrobe.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Beige", "Black"]
    },
    {
        id: 2,
        name: "Minimal White Shirt",
        category: "men",
        price: 42,
        oldPrice: 55,
        badge: "NEW ARRIVAL",
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800",
        description: "A timeless white shirt with a clean silhouette and comfortable fit.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Black"]
    },
    {
        id: 3,
        name: "Elegant Summer Dress",
        category: "women",
        price: 78,
        oldPrice: 95,
        badge: "TRENDING",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
        description: "A beautiful summer dress made for effortless elegance and memorable moments.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Cream", "Brown"]
    },
    {
        id: 4,
        name: "Everyday Leather Bag",
        category: "accessories",
        price: 55,
        oldPrice: 70,
        badge: "POPULAR",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
        description: "A versatile everyday bag with a minimalist and timeless design.",
        sizes: ["One Size"],
        colors: ["Brown", "Black"]
    },
    {
        id: 5,
        name: "Casual Denim Jacket",
        category: "men",
        price: 89,
        oldPrice: null,
        badge: "NEW ARRIVAL",
        image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=800",
        description: "A versatile denim jacket that adds a relaxed touch to any outfit.",
        sizes: ["M", "L", "XL"],
        colors: ["Blue", "Black"]
    },
    {



    
        id: 6,
        name: "Modern Sunglasses",
        category: "accessories",
        price: 35,
        oldPrice: 45,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
        description: "Complete your look with these modern everyday sunglasses.",
        sizes: ["One Size"],
        colors: ["Black", "Brown"]
    },
    {
        id: 7,
        name: "Classic Black Coat",
        category: "women",
        price: 110,
        oldPrice: null,
        badge: "EXCLUSIVE",
        image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=800",
        description: "A sophisticated black coat with a timeless silhouette.",
        sizes: ["S", "M", "L"],
        colors: ["Black", "Camel"]
    },
    {
        id: 8,
        name: "Essential Leather Shoes",
        category: "men",
        price: 95,
        oldPrice: 120,
        badge: "BEST SELLER",
        image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800",
        description: "Classic shoes designed to complement both casual and smart outfits.",
        sizes: ["40", "41", "42", "43", "44"],
        colors: ["Brown", "Black"]
    }
];

// Make products available to the other JavaScript files
window.products = products;
