function compileReceipt(){
  const customerSharedRate = Number(currentCustomer.shared_rate_per_mile).toFixed(2);
  const restaurantSharedRate = Number(currentRestData.rate).toFixed(2);
  const taxTotal = Number((localTaxRate/100) * Number(orderSubTotal)).toFixed(2);

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
    <p> Local Tax: + ${taxTotal}
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
  const deliveryTotal = Number(localMarketRate * deliveryDistance).toFixed(2);
  const rateOverage = Number(localMarketRate - customerSharedRate - restaurantSharedRate);
  const overageAmount = Number(rateOverage * deliveryDistance).toFixed(2);
  const halfOverageAmount = Number(overageAmount/2);

  let customerDeliveryFee = Number((customerSharedRate * deliveryDistance) - halfOverageAmount).toFixed(2);
  let restaurantDeliveryFee = Number((restaurantSharedRate * deliveryDistance) - halfOverageAmount).toFixed(2);
  
  let deliveryFeeInfo = {
    customerDeliveryFee: customerDeliveryFee, 
    restaurantDeliveryFee: restaurantDeliveryFee, 
    deliveryTotal: deliveryTotal 
  };

  return deliveryFeeInfo;
};

function calculateCustomerTotal(orderSubTotal, taxTotal, customerDeliveryFee, appFee) {
  let total = orderSubTotal + Number(taxTotal) + Number(customerDeliveryFee) + appFee;
  return Number(total).toFixed(2);
}

$("#receipt-dialog").dialog({
  autoOpen: false,
  modal: true 
});