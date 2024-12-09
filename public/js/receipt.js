function compileReceipt(){
  const customerSharedRate = currentCustomer.shared_rate_per_mile;
  const restaurantSharedRate = currentRestData.rate;
  const taxTotal = (localTaxRate/100) * orderSubTotal;

  let deliveryFeeInfo = calculateDeliveryShares(localMarketRate, deliveryDistance, customerSharedRate, restaurantSharedRate);
  let customerTotal = calculateCustomerTotal(orderSubTotal, taxTotal, deliveryFeeInfo.customerDeliveryFee, appFee);

  let receiptHtml = `<p> Local Market Fair Trade Delivery Rate: $ ${localMarketRate} per mile </p>
    <p> Delivery Distance: ${deliveryDistance} miles </p>
    <p> Fair Trade Delivery Total: $ ${deliveryFeeInfo.deliveryTotal}
    <br>
    <p> Restaurant Shared Rate: $ ${restaurantSharedRate} per mile </p>
    <p> Customer Shared Rate : $ ${customerSharedRate} per mile </p>
    <br>
    <p> Subtotal: + ${orderSubTotal}</p>
    <p> Local Tax: + ${Number(taxTotal).toFixed(2)}
    <p> Fair Trade Delivery Fee: + ${deliveryFeeInfo.deliveryTotal}</p>
    <p> Restaurant Delivery Coverage: - ${deliveryFeeInfo.restaurantDeliveryFee} </p>
    <p> App Fee: + ${appFee} </p>
    <br>
    <p> Order Total: ${customerTotal} </p>`;
  //consider minimum delivery fee for short distance/range 
  // consider extra fee for long distance/range

  $("#receipt-dialog").html(receiptHtml).dialog("open");
};

function calculateDeliveryShares(localMarketRate, deliveryDistance, customerSharedRate, restaurantSharedRate) {
  const deliveryTotal = localMarketRate * deliveryDistance;
  const rateOverage = localMarketRate - customerSharedRate - restaurantSharedRate;
  const overageAmount = rateOverage * deliveryDistance;
  const halfOverageAmount = overageAmount/2;

  let customerDeliveryFee = (customerSharedRate * deliveryDistance) - halfOverageAmount;
  let restaurantDeliveryFee = (restaurantSharedRate * deliveryDistance) - halfOverageAmount;
  
  let deliveryFeeInfo = {
    customerDeliveryFee: customerDeliveryFee, 
    restaurantDeliveryFee: restaurantDeliveryFee, 
    deliveryTotal: deliveryTotal 
  };

  return deliveryFeeInfo;
};

function calculateCustomerTotal(orderSubTotal, taxTotal, customerDeliveryFee, appFee) {
  console.log(orderSubTotal, taxTotal, customerDeliveryFee, appFee);
  let total = orderSubTotal + taxTotal + customerDeliveryFee + appFee;
  return Number(total).toFixed(2);
}

$("#receipt-dialog").dialog({
  autoOpen: false,
  modal: true 
});