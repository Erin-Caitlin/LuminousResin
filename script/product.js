// Current year
document.querySelector('[currentYear]').textContent = new Date(). getUTCFullYear() 

// local storage
let store = document.querySelector('[Products]')
let searchBar = document.querySelector('[searchBar]')
let sortProducts = document.querySelector('[sortBtn]')
let products = JSON.parse(localStorage.getItem('products')) 
    ? JSON.parse(localStorage.getItem('products')) 
    : localStorage.setItem('products', 
        JSON.stringify(
            [
                // Row of coasters
                {
                    id: 1,
                    productName: "Baby Pink Blossom",
                    category: "Coasters",
                    description: "Baby Pink Coasters and Tray Combo",
                    amount: 1200.99,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/Baby Pink Epoxy Pigment Paste.jpg"
                },
                {
                    id: 2,
                    productName: "But First, Coffee",
                    category: "Coasters",
                    description: "Set of four mixed pink and gold coasters",
                    amount: 450.79,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/custom name coasters.jpg"
                },
                {
                    id: 3,
                    productName: "Wedding Daze",
                    category: "Coasters",
                    description: "Set of four golden cover resin coasters",
                    amount: 550.96,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/golden resin coasters.jpg"
                },
                {
                    id: 4,
                    productName: "Emerald Bliss",
                    category: "Coasters",
                    description: "Four coasters set and Tray Combo",
                    amount: 1000.99,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/download (3).jpg"
                },
                // Row of bookmarks
                {
                    id: 5,
                    productName: "Fantasy Land",
                    category: "Bookmark",
                    description: "White and gold flake leaf bookmark set",
                    amount: 350.88,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/Resin Feather Bookmark.jpg"
                },
                {
                    id: 6,
                    productName: "Flower Field",
                    category: "Bookmark",
                    description: "Four assorted colourful pressed flowers set",
                    amount: 480.54,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/download (2).jpg"
                },
                {
                    id: 7,
                    productName: "Golden Flower",
                    category: "Bookmark",
                    description: "Gold Flake, Flower print bookmark set",
                    amount: 362.57,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/gold leaf.jpg"
                },
                {
                    id: 8,
                    productName: "Philippians 4:13",
                    category: "Bookmark",
                    description: "Bible verse bookmark set of two",
                    amount: 336.99,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/download (4).jpg"
                },
                // Row of notebooks
                {
                    id: 9,
                    productName: "Bunch of Roses",
                    category: "Notebook",
                    description: "Set of 3 - Resin Journals with Pressed Flowers",
                    amount: 460.99,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/Handmade Resin Journals with Pressed Flowers.jpg"
                },
                {
                    id: 10,
                    productName: "Ocean Rise",
                    category: "Notebook",
                    description: "minimalistic diary",
                    amount: 400.36,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/minimalistic diary.jpg"
                },
                {
                    id: 11,
                    productName: "Marshmellow bundle",
                    category: "Notebook",
                    description: "Pink and White Notebook - Resin Gift Set",
                    amount: 480.99,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/Resin Gift Set.jpg"
                },
                {
                    id: 12,
                    productName: "Cloud 9",
                    category: "Notebook",
                    description: "Notebook Planner Cover A5",
                    amount: 380.00,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/Notebook Planner Cover A5.jpg"
                },
                // Row of clocks
                {
                    id: 13,
                    productName: "Midnight Surf",
                    category: "Clock",
                    description: "Black Abstract Epoxy Resin Wall Clock",
                    amount: 2000.99,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/BlackAbstractEpoxyResinWallClock.jpg"
                },
                {
                    id: 14,
                    productName: "Royal Time",
                    category: "Clock",
                    description: "Fancy White Wall Clock",
                    amount: 2600.98,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/Fancy White Wall Clock.jpg"
                },
                {
                    id: 15,
                    productName: "Midnight Hour",
                    category: "Clock",
                    description: "Black, Gold & White Wall Clock ",
                    amount: 1500.00,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/black ocean.jpg"
                },
                {
                    id: 16,
                    productName: "Ancient Age",
                    category: "Clock",
                    description: "Resin Ink Wall Clock",
                    amount: 1300.52,
                    img_url: "https://erin-caitlin.github.io/all-images/LuminousResin/Resin ink clock.jpg"
                }
            ]
        )
)
function displayProducts() {
    try {
        let arrSize = products.length
        let allProducts = products
        allProducts.forEach(product => {
            store.innerHTML += `
            <div class="card" style="width: 18rem;" id="all-products">
                <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading='lazy'>
                <div class="card-body">
                  <h4 class="card-title">${product.productName}</h4>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text">R ${product.amount}</p>
                  <button class="btn" onclick= 'cart(${product.id})'>Add to cart</button>
                </div>
            </div>`
        })
    } catch (e) {
        store.textContent = "Please contact our administrator"
        setTimeout(() => {
            location.reload()
        },
            2000
        )
    }
}
displayProducts()


// Search bar
searchBar.addEventListener('change', () => {
    
})

function displayProductsFiltered(args) {
    store.innerHTML = ""
    try {
        args.forEach(product => {
            store.innerHTML += `
            <div class="card" style="width: 18rem;" id="all-products">
                <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading='lazy'>
                <div class="card-body">
                  <h4 class="card-title">${product.productName}</h4>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text">R ${product.amount}</p>
                  <button class="btn" onclick="cart()">Add to cart</button>
                </div>
            </div>`
        })

    } catch (e) {
        let spinner = document.createElement("div");
        spinner.innerHTML = `
        <div class="spinner-border text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>`;
        store.appendChild(spinner);
        setTimeout(() => {
            location.reload()
        },
            2000
        )
    }
}
document.querySelector('[searchBar]').addEventListener('keyup', ()=>{
    try {
        if (searchBar.value.length < 1) {
            displayProductsFiltered(products)
        }
        let filteredProduct = products.filter(product => product.productName.toLowerCase().includes(searchBar.value))
        displayProductsFiltered(filteredProduct)
        if (!filteredProduct.length) throw new Error(`${searchBar.value} was not found`)
    } catch (e) {
        console.log(e);
        store.textContent = e.message || 'Please try again later'
    }
})

// sorting
let isToggle = false
sortProducts.addEventListener('click', () => {
    try {
        if (!products) throw new Error('Please try again later')
        if (!isToggle) {
            products.sort((a, b) => b.amount - a.amount)
            sortProducts.textContent = 'Sorted by highest amount'
            isToggle = true
        } else {
            products.sort((a, b) => a.amount - b.amount)
            sortProducts.textContent = 'Sorted by lowest amount'
            isToggle = false
        }
        displayProductsFiltered(products)
    } catch (e) {
        store.textContent = e.message || 'We apologise for the inconvience, please try again later.'
    }
})

window.onload = () => {
    document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
        ? JSON.parse(localStorage.getItem('checkout')).length
        : 0
}

// Add to cart
let checkoutItems = JSON.parse(localStorage.getItem('checkout')) || [];

function cart(productId) {
    try {
        let product = products.find(item => item.id === productId);
        if (product) {
            console.log(product);
            checkoutItems.push(product);
            document.querySelector('[counter]').textContent = checkoutItems.length;
            localStorage.setItem('checkout', JSON.stringify(checkoutItems));
        }
    } catch (e) {
        alert("Unable to add product to cart");
    }
}