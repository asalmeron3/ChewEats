let cart = {items: []};

function reviewOrder(){
  // will calculate the total of the order and the shared rates between the customer and the restaurant based on the area minimum
}


function addToCart(menuItem){
  // menuItem is an obj with the keys name, price, and restId
  let itemData = menuItem.data();
  let allItems = cart.items;
  let itemDoesNotExist = true;
  let orderSubTotal = 0;

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
    orderSubTotal+= itemsCalculatedPrice;
    $(".customer-cart").append(row);
  })
  $(".customer-cart").append(`<tr><td> Subtotal = ${orderSubTotal.toFixed(2)}`);
};

$(".menu").on("click", ".add-to-cart", function(){
  let rowDataObj = $($(this).parent());
  addToCart(rowDataObj);
});
