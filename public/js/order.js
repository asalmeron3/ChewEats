let cart = {items: []};
let orderSubTotal = 0;
let deliveryDistance;
const localMarketRate = 2;
const localTaxRate = 8;
const appFee = 1;

function reviewOrder(){
  if(currentCustomer == undefined){
    //alert("Please select a customer before placing your order");
    $("#customer-dialog").dialog("open");
  } else{
    let totalSharedRatePerMile = Number(currentCustomer.shared_rate_per_mile) + Number(currentRestData.rate);
    deliveryDistance = calculateDeliveryDistance(currentRestData.lat, currentRestData.lng, currentCustomer.lat, currentCustomer.lng);
    let isOrderEligibleForDelivery = determineDeliveryEligibility(totalSharedRatePerMile, deliveryDistance, orderSubTotal, currentRestData.rev_min);

    if(isOrderEligibleForDelivery){
      let foodTotal = orderSubTotal * (1+ localTaxRate/100);
      let customerDeliveryPortion = currentCustomer.shared_rate_per_mile * deliveryDistance;
      let orderTotal = Number(foodTotal + customerDeliveryPortion + appFee).toFixed(2);
      alert("Your order IS eligible for delivery. Your total will be: " + orderTotal);
      compileReceipt();
    } else {
      alert("Your order is not eligible for delivery. Please add more items or increase your share of the delivery rate");
    }
  }
}

function calculateDeliveryDistance(resLat, resLong, cusLat, cusLong){
  let latDiff = Math.abs(resLat - cusLat);
  let longDiff = Math.abs(resLong - cusLong);
  let distance = Number(Math.sqrt(latDiff^2 + longDiff^2)).toFixed(2);
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

$(".customer-cart").on("click", ".place-order", function(){
  reviewOrder();
});