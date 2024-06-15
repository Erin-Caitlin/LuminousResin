// Current year
document.querySelector('[currentYear]').textContent = new Date(). getUTCFullYear()

window.onload = () => {
    document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
    ? JSON.parse(localStorage.getItem('checkout')).length : 0;
}

let checkoutDisplay = JSON.parse(localStorage.getItem('checkout')) || [];
function displayCart() {
    let cartSummary = document.querySelector("[table]");
    cartSummary.innerHTML = `
        <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Remove</th>
        </tr>`;
        checkoutDisplay.forEach((product, index) => {
        let cartProducts= `
        <tr>
            <td><img src="${product.img_url}" alt="${product.productName}" style="width: 50px;"></td>
            <td>${product.productName}</td>
            <td>${product.category}</td>
            <td>R ${product.amount}</td>
            <td><input type="number" quantity></td>
            <td subtotal></td>
            <td><button class="delete-button btn btn-danger" onclick="removeProducts(${index})">Remove</button></td>
        </tr>`;
        cartSummary.innerHTML += cartProducts;
    });
}

document.addEventListener('DOMContentLoaded', displayCart);
function removeProducts(index) {
    checkoutDisplay.splice(index, 1);
    localStorage.setItem('checkout', JSON.stringify(checkoutDisplay));
    displayCart();
}

let purchaseBtn = document.querySelector('[purchase]')
purchaseBtn.addEventListener('click', purchase)
function purchase(){
    checkoutDisplay = [];
    localStorage.removeItem('checkout');
    displayCart();

    alert('Your purchase has been successful!')
}

let quantity = document.querySelector('[quantity]')
let subtotal = document.querySelector('[subtotal]')
subtotal.addEventListener('change', calculateSubtotal)

function calculateSubtotal(){
    let subAmount = quantity.value * `${product.amount}`
    subtotal.textContent =(`R${subAmount.toFixed(2)}`)
    return subtotal
}