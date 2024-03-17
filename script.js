var productArr = [
  {
    name: "Bag",
    imgUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    addToCart: false
  },
  {
    name: "Smartphone",
    imgUrl: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    addToCart: false
  },
  {
    name: "Headphone",
    imgUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    addToCart: false
  }
]

var cartCount = 0;
var cartToggle = 0;

var cart = productArr.map((product) => {
  var cart =
    document.querySelector(".carts").innerHTML +=
    `<div class="cart py-3 px-2 bg-white rounded overflow-hidden w-64">` +
    `<div class="w-full h-2/3 flex justify-between items-center py-2 px-2 gap-5">` +
    `<img src=${product.imgUrl} class="w-24 h-full object-cover rounded" />` +
    `<h1 class="text-lg font-semibold">
            ${product.name}
          </h1>`
    +
    `</div>` +
    `<div class="w-full h-1/3 flex justify-center items-center">` +
    ` <button
            class="cartBtn h-full flex justify-center items-center bg-slate-100 rounded-xl px-3 py-2 text-lg font-semibold border border-gray-500" btnToggle=true>Add
            to Cart</button>`+
    ` </div>`
    +
    ` </div>`
  return cart;
})

document.querySelectorAll(".cartBtn").forEach((btn)=>{
  btn.addEventListener("click", function (e){
console.log(e.target.parentElement.parentElement.children[0].children[0].src);
    cartCount++;
    console.log(cartCount);
    if (cartCount > 0) {
  var cartNum = document.querySelector(".cartNum");
  cartNum.classList.remove("hidden");
  cartNum.innerHTML = cartCount;
    }
    console.log(btn.btnToggle);
    
  });
})

document.querySelector(".shoppingCart").addEventListener("click",function(){
  if (cartToggle == 0) {
     document.querySelector(".cartMenu").classList.remove("hidden");
    cartToggle = 1;
  }
  else {
    document.querySelector(".cartMenu").classList.add("hidden");
    cartToggle = 0;
  }
  
})
console.log(document.querySelector(".cartMenu"));