// Current year
document.querySelector('[currentYear]').textContent = new Date(). getUTCFullYear()

window.onload = () => {
    document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
        ? JSON.parse(localStorage.getItem('checkout')).length
        : 0
}

