let cartItems = [];

function addToCart(item) {
    cartItems.push(item);
    updateCart();
}


function updateCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cartItems.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });
}

function bookTable() {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const duration = document.getElementById("duration").value;
    const seating = document.getElementById("seating").value;
    const quickDelivery = document.getElementById("delivery").checked;

    // Code to handle booking process
    console.log("Booking details:", date, time, duration, seating, quickDelivery);
}
function checkout() {
    // Code to handle checkout process
    console.log("Checkout:", cartItems);
    alert("Your order has been placed!");
    cartItems = [];
    updateCart();
}