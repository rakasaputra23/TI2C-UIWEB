document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const btnLogin = document.getElementById('btnLogin');
    const loginError = document.getElementById('loginError');

    btnLogin.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === 'Raka2553@gmail.com' && password === '233307082') {
            loginError.style.display = 'none'; 
            window.location.href = 'order.html'; 
        } else {
            loginError.textContent = 'Username atau password salah.';
            loginError.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const orderSection = document.getElementById('orderSection');
    const foodItemSelect = document.getElementById('foodItem');
    const drinkItemSelect = document.getElementById('drinkItem');
    const btnOrder = document.getElementById('btnOrder');
    const orderList = document.getElementById('orderList');
    const totalPrice = document.getElementById('totalPrice');
    const inputPayment = document.getElementById('inputPayment');
    const btnPay = document.getElementById('btnPay');
    const paymentResult = document.getElementById('paymentResult');
    const orderError = document.getElementById('orderError');

    const menu = [
        { name: 'Nasi Goreng', price: 15000 },
        { name: 'Mie Goreng', price: 12000 },
        { name: 'Soto Ayam', price: 18000 },
        { name: 'Rawon', price: 16000 },
        { name: 'Sate Ayam', price: 20000 },
        { name: 'Es Teh', price: 5000 },
        { name: 'Es Jeruk', price: 7000 },
        { name: 'Jus Alpukat', price: 12000 },
        { name: 'Kopi Hitam', price: 8000 },
        { name: 'Soda Gembira', price: 10000 }
    ];

    let orders = [];

    btnOrder.addEventListener('click', () => {
        const selectedFoodName = foodItemSelect.value;
        const selectedDrinkName = drinkItemSelect.value;
        const selectedFood = menu.find(item => item.name === selectedFoodName);
        const selectedDrink = menu.find(item => item.name === selectedDrinkName);

        if (selectedFood && selectedDrink) {
            orderError.style.display = 'none';
            orders.push(selectedFood);
            orders.push(selectedDrink);
            renderOrders();
        } else {
            orderError.textContent = 'Makanan atau minuman yang Anda pilih tidak ada.';
            orderError.style.display = 'block';
        }
    });

    btnPay.addEventListener('click', () => {
        const paymentAmount = parseInt(inputPayment.value);
        const totalAmount = orders.reduce((total, order) => total + order.price, 0);

        if (paymentAmount >= totalAmount) {
            const change = paymentAmount - totalAmount;
            paymentResult.textContent = `Pembayaran berhasil, kembalian: Rp ${change}`;
            paymentResult.style.color = 'green';
        } else {
            paymentResult.textContent = 'Jumlah pembayaran kurang.';
            paymentResult.style.color = 'red';
        }
        paymentResult.style.display = 'block';
    });

    function renderOrders() {
        orderList.innerHTML = '';
        let total = 0;
        orders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.textContent = `${order.name} - Rp ${order.price}`;
            orderList.appendChild(orderItem);
            total += order.price;
        });
        totalPrice.textContent = `Total Harga: Rp ${total}`;
    }

    orderSection.style.display = 'block';
});