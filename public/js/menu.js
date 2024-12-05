function showRestMenu(restData){
  let {dbid} = restData;
  $(".menu-box").empty();
  let menu = $(".menu-box");
  $.get("/api/menu-items/"+ dbid, function(data){
    data.forEach(e => {
      let rowInfo = $("<tr>").attr({
        "class": "menu-item",
        "data-name": e.name,
        "data-price": e.price,
        "data-restId": dbid
      }).append(`<td>${e.name}</td><td>${e.price}</td>`);
      rowInfo.append("<button class=add-to-cart> Add To Cart</button>");
      menu.append(rowInfo);
      
    });
  });
};

function addToCart(menuItem){
  // menuItem is an obj with the keys name, price, and restId
  let itemData = menuItem.data();
  let allItems = cart.items;
  let itemDoesNotExist = true;
  orderSubTotal = 0;

  if(allItems.length != 0){
    $(".customer-cart").empty();
    allItems.forEach(e => {
      if(itemData.name == e.name){
        itemDoesNotExist = false;
        e.quantity++;
      }
    });
  };

  if(itemDoesNotExist) {
    let item = {"quantity": 1, "name": itemData.name, "price":itemData.price};
    allItems.push(item);
  };

  cart.items = allItems;  
  cart.items.forEach(item =>{
    let {quantity, name, price} = item;
    let itemsCalculatedPrice = quantity * Number(price);
    let row = $("<tr>").append(`<td> ${quantity}  x ${name} ... ${itemsCalculatedPrice.toFixed(2)}</td>`);
    orderSubTotal += itemsCalculatedPrice;
    $(".customer-cart").append(row);
  })
  $(".customer-cart").append(`<tr id=subtotal ><td> Subtotal = ${orderSubTotal.toFixed(2)}</td></tr>`);
  $(".customer-cart").append(`<button class=place-order> Place My Order </button>`);
};

$(".menu").on("click", ".add-to-cart", function(){
  let rowDataObj = $($(this).parent());
  addToCart(rowDataObj);
});
