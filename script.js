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