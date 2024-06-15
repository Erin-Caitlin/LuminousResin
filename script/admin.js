// Current year
document.querySelector('[currentYear]').textContent = new Date(). getUTCFullYear()

window.onload = () => {
    document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
        ? JSON.parse(localStorage.getItem('checkout')).length
        : 0
}
let display = document.querySelector('[Products]')
let productsDisplay = JSON.parse(localStorage.getItem('admin')) || [];

function displayAllProducts() {
    try {
        let allStoreProducts = document.querySelector('[table]');
        allStoreProducts.forEach(product => {
            allStoreProducts.innerHTML += `
            <tr>
                <td><img src="${product.img_url}" alt="${product.productName}" style="width: 50px;"</td>
                <td>${product.productName}</td>
                <td>${product.category}</td>
                <td>${product.description}</td>
                <td>R ${product.amount}</td>
            </tr>`
        })
    } catch (e) {
        allStoreProducts.innerHTML = `
        <div class="spinner-border m-5" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>`;
        setTimeout(() => {
            location.reload()
        },
            2000
        )
    }
}
let spinner = document.querySelector('.spinner-border');
setTimeout(() =>{
spinner.style.opacity = '0';
}, 200);