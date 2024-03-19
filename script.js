var productArr = [
  {
    id: 0,
    name: "Bag",
    imgUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    addToCart: true
  },
  {
    id: 1,
    name: "Smartphone",
    imgUrl: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    addToCart: true
  },
  {
    id: 2,
    name: "Headphone",
    imgUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    addToCart: true
  },
]
var orderCart = []

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
    id= ${product.id}
            class="cartBtn h-full flex justify-center items-center bg-slate-100 rounded-xl px-3 py-2 text-lg font-semibold border border-gray-500" btnToggle=true>Add
            to Cart</button>`+
    ` </div>`
    +
    ` </div>`
  return cart;
})

document.querySelectorAll(".cartBtn").forEach((btn) => {

  btn.addEventListener("click", function(e) {

    var arr = productArr.filter((item) =>
      item.id == e.target.id);

    if (arr[0].addToCart) {
      cartCount++;
      document.querySelector(".cartNum").innerText = cartCount;
      btn.innerHTML = "Remove to Cart";

      var order = {
        id: arr[0].id,
        name: e.target.parentElement.parentElement.children[0].children[1].textContent,
        imgUrl: e.target.parentElement.parentElement.children[0].children[0].src
      };
      orderCart.push(order);
      document.querySelector(".cartMenu").innerHTML += `
      <div class="orderCart w-full py-3 px-3 bg-gray-200 flex items-center justify-between rounded mb-3">` +
        `<img src=${orderCart[orderCart.length - 1].imgUrl} class="w-10 h-10 rounded-full object-cover" />` +
        `<h1>${orderCart[orderCart.length - 1].name}</h1>` +
        `<i class="close ri-close-line text-xl font-semibold"></i>` +
        `</div>`
    arr[0].addToCart = false;
    console.log(orderCart);
  } else {

    cartCount--;
  document.querySelector(".cartNum").innerText = cartCount;
  btn.innerHTML = "Add to Cart";
  arr[0].addToCart = true;
  
}

    if (cartCount == 0)
  document.querySelector(".cartNum").classList.add("hidden");
else if (cartCount > 0)
  document.querySelector(".cartNum").classList.remove("hidden");

  });
})

document.querySelector(".shoppingCart").addEventListener("click", function() {
  if (cartToggle == 0) {
    document.querySelector(".cartMenu").classList.remove("hidden");
    cartToggle = 1;
  }
  else {
    document.querySelector(".cartMenu").classList.add("hidden");
    cartToggle = 0;
  }

})

