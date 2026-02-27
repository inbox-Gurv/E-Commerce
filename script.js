let cartCount = 0;
let total = 0;

function changeImage(img){
document.getElementById("mainImage").src = img.src;
}

function addToCart(){
cartCount++;
total += 999;
document.getElementById("cartCount").innerText = cartCount;
document.getElementById("cartItems").innerHTML =
"<p>Combo Pack - ₹999</p>";
document.getElementById("total").innerText = total;
}

function toggleCart(){
document.getElementById("cartSidebar").classList.toggle("active");
}

function scrollToProduct(){
document.getElementById("product").scrollIntoView({
behavior:"smooth"
});
}






function addToCart(name, price){
    cartCount++;
    total += price;

    document.getElementById("cartCount").innerText = cartCount;

    document.getElementById("cartItems").innerHTML += 
        `<p>${name} - ₹${price}</p>`;

    document.getElementById("total").innerText = total;
}





function toggleMenu(){
    document.getElementById("navMenu").classList.toggle("active");
}

function scrollToProduct(){
    const section = document.getElementById("product");
    if(section){
        section.scrollIntoView({ behavior: "smooth" });
    }
}




document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("successMsg").innerText =
        "Thank you! Your message has been sent successfully.";
    this.reset();
});






let cart = {};

function addToCart(name, price){

    if(cart[name]){
        cart[name].qty += 1;
    } else {
        cart[name] = {
            price: price,
            qty: 1
        };
    }

    renderCart();
}

function increaseQty(name){
    cart[name].qty += 1;
    renderCart();
}

function decreaseQty(name){
    cart[name].qty -= 1;

    if(cart[name].qty <= 0){
        delete cart[name];
    }

    renderCart();
}

function renderCart(){

    let cartItemsDiv = document.getElementById("cartItems");
    let cartCount = 0;
    let total = 0;

    cartItemsDiv.innerHTML = "";

    for(let item in cart){

        cartCount += cart[item].qty;
        total += cart[item].price * cart[item].qty;

        cartItemsDiv.innerHTML += `
        <div class="cart-item">
            <p>${item}</p>
            <div class="qty-controls">
                <button onclick="decreaseQty('${item}')">−</button>
                <span>${cart[item].qty}</span>
                <button onclick="increaseQty('${item}')">+</button>
            </div>
            <p>₹${cart[item].price * cart[item].qty}</p>
        </div>
        `;
    }

    document.getElementById("cartCount").innerText = cartCount;
    document.getElementById("total").innerText = total;
}

function toggleCart(){
    document.getElementById("cartSidebar").classList.toggle("active");
}



function toggleMenu(){
document.getElementById("navMenu").classList.toggle("active");
}









function toggleCart(){
    document.getElementById("cartSidebar").classList.toggle("active");
    document.getElementById("cartOverlay").classList.toggle("active");
}
