// Products data array
const products = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Tender chicken marinated in royal spices, layered with fragrant basmati rice",
    image: "asset/chicken-biryani.png",
    category: "biryani",
    tag: "Best Seller",
    delay: 100
  },
  {
    id: 2,
    name: "Mutton Biryani",
    description: "Succulent mutton slow-cooked with aromatic spices and premium rice",
    image: "asset/mutton-biryani.png",
    category: "biryani",
    tag: "Royal Pick",
    delay: 200
  },
  {
    id: 3,
    name: "Naattu Kozhi Biryani",
    description: "Authentic betel leaf preparation with aromatic spices and nuts",
    image: "asset/naatu-kozhi-biryani.png",
    category: "biryani",
    tag: "Traditional",
    delay: 400
  },
  {
    id: 4,
    name: "Mutton Mandi Biryani",
    description: "Where Emirati Heritage Meets Indian Appetite",
    image: "asset/mutton-mandi.png",
    category: "mandi",
    tag: "Royal Pick",
    delay: 300
  },
  {
    id: 5,
    name: "Chicken Mandi Biryani (Full)",
    description: "Where Emirati Heritage Meets Indian Appetite",
    image: "asset/chicken-mandi-full.png",
    category: "mandi",
    tag: "Royal Pick",
    delay: 300
  },
  {
    id: 6,
    name: "Chicken Mandi (Quarter)",
    description: "Perfect portion of tender chicken with aromatic rice, slow-cooked in traditional Emirati style",
    image: "asset/mandi-chicken-quarter.png",
    category: "mandi",
    tag: "Royal Pick",
    delay: 300
  },
  {
    id: 7,
    name: "Chicken Mandi (Half)",
    description: "Where Emirati Heritage Meets Indian Appetite",
    image: "asset/chicken-mandi-half.png",
    category: "mandi",
    tag: "Royal Pick",
    delay: 300
  },
  {
    id: 8,
    name: "Bamboo Biryani",
    description: "Rich gravy and cooling yogurt accompaniment for the perfect balance",
    image: "asset/bamboo-biryani.png",
    category: "biryani",
    tag: "Perfect Pair",
    delay: 500
  },
  {
    id: 9,
    name: "Lollipop Chicken Biryani",
    description: "Rich gravy and cooling yogurt accompaniment for the perfect balance",
    image: "asset/lolipop-biryani.png",
    category: "biryani",
    tag: "Perfect Pair",
    delay: 500
  },
  {
    id: 10,
    name: "Raita",
    description: "Rich gravy and cooling yogurt accompaniment for the perfect balance",
    image: "asset/raita.png",
    category: "sweets",
    tag: "Perfect Pair",
    delay: 500
  },
  {
    id: 11,
    name: "Chef's Special",
    description: "An exclusive creation that will redefine your dining experience",
    image: "asset/big-mutton-mandi.png",
    category: "mandi",
    tag: "Pre-Order Only",
    delay: 600,
    comingSoon: true
  }
];

// Function to generate product card HTML
function generateProductCard(product) {
  const cardClass = product.comingSoon ? "product-card coming-soon" : "product-card";
  
  let cardHTML = `
    <div class="${cardClass}" data-category="${product.category}" data-aos="fade-up" data-aos-delay="${product.delay}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-tag">${product.tag}</div>
  `;
  
  if (product.comingSoon) {
    cardHTML += `
        <div class="overlay">
          <div class="overlay-content">
            <h3>Mutton Mandi Biryani</h3>
            <p>Something extraordinary is brewing in our kitchen</p>
          </div>
        </div>
    `;
  }
  
  cardHTML += `
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
    </div>
  `;
  
  return cardHTML;
}

// Function to render all products
function renderProducts() {
  const productsContainer = document.querySelector('.products');
  if (!productsContainer) return;
  
  productsContainer.innerHTML = '';
  
  products.forEach(product => {
    const productCard = generateProductCard(product);
    productsContainer.innerHTML += productCard;
  });
}

// Initialize products when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
}); 