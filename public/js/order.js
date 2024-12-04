let cart = {items: []};
let orderSubTotal = 0;
const localTaxRate = 8;
const appFee = 1;


function reviewOrder(){
  if(currentCustomer == undefined){
    alert("Please select a customer before placing your order");
  } else{
    let totalSharedRatePerMile = Number(currentCustomer.shared_rate_per_mile) + Number(currentRestData.rate);
    let deliveryDistance = calculateDeliveryDistance(currentRestData.lat, currentRestData.long, currentCustomer.lat, currentCustomer.long);
    let isOrderEligibleForDelivery = determineDeliveryEligibility(totalSharedRatePerMile, deliveryDistance, orderSubTotal, currentRestData.rev_min);

    if(isOrderEligibleForDelivery){
      let foodTotal = orderSubTotal * (1+ localTaxRate/100);
      let customerDeliveryPortion = currentCustomer.shared_rate_per_mile * deliveryDistance;
      let orderTotal = Number(foodTotal + customerDeliveryPortion + appFee).toFixed(2);
      alert("Your order IS eligible for delivery. Your total will be: " + orderTotal);
    } else {
      alert("Your order is not eligible for delivery. Please add more items or increase your share of the delivery rate");
    }
  }
}

function calculateDeliveryDistance(resLat, resLong, cusLat, cusLong){
  let latDiff = Math.abs(resLat - cusLat);
  let longDiff = Math.abs(resLong - cusLong);
  let distance = Math.sqrt(latDiff^2 + longDiff^2);
  return distance;
}

function determineDeliveryEligibility(sharedRate, distance, orderSubTotal, restProfitMinimum){
  let profit = orderSubTotal - (sharedRate * distance);
  if(profit > restProfitMinimum) {
    return true;
  } else {
    return false;
  }
}

function addToCart(menuItem){
  // menuItem is an obj with the keys name, price, and restId
  let itemData = menuItem.data();
  let allItems = cart.items;
  let itemDoesNotExist = true;

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
  $(".customer-cart").append(`<tr id=subtotal ><td> Subtotal = ${orderSubTotal.toFixed(2)}</td></tr>`);
  $(".customer-cart").append(`<button class=place-order> Place My Order </button>`);
};

$(".menu").on("click", ".add-to-cart", function(){
  let rowDataObj = $($(this).parent());
  addToCart(rowDataObj);
});

$(".customer-cart").on("click", ".place-order", function(){
  reviewOrder();
});