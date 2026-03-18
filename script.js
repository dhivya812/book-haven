let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
cart.push({name, price});
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to cart");
}

if (document.getElementById("cart")) {
let total = 0;
let output = "";
cart.forEach(item => {
output += item.name + " - ₹" + item.price + "<br>";
total += item.price;
});
document.getElementById("cart").innerHTML = output;
document.getElementById("total").innerText = "Total: ₹" + total;
}
