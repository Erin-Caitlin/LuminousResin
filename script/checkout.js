// Current year
document.querySelector('[currentYear]').textContent = new Date(). getUTCFullYear()

// window.onload = () => {
//     document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
//     ? JSON.parse(localStorage.getItem('checkout')).length : 0;

    let checkoutItems = JSON.parse(localStorage.getItem('checkout')) || [];
    let table = document.querySelector('[table]');
    let totalAmount = 0;
   
//     checkoutItems.forEach(product => {
//         totalAmount += product.amount;
//         table.innerHTML += `
//             <tr>
//                 <td>${product.productName}</td>
//                 <td><img src="${product.img_url}" alt="${product.productName}" loading='lazy'></td>
//                 <td>${product.description}</td>
//                 <td>R ${product.amount}</td>
//             </tr>`;
//     });


//     document.querySelector('[totalAmount]').textContent = `Total: R ${totalAmount.toFixed(2)}`;
// }

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
            <td>${product.amount}</td>
            <td>1</td>
            <td>${product.amount}</td>
        </tr>`;
        cartSummary.innerHTML += cartProducts;
    });
}


document.addEventListener('DOMContentLoaded', displayCart);

// let spinnerWrapper = document.querySelector('.spinner-wrapper');
// setTimeout(() =>{
// spinnerWrapper.style.opacity = '0';
// }, 200);



