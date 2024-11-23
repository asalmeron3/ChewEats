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