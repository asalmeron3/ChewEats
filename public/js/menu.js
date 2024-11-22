function showRestMenu(restId){
  $(".menu-box").empty();
  let menu = $(".menu-box");
  $.get("/api/menu-items/"+ restId, function(data){
    data.forEach(e => {
      let rowInfo = $("<tr>").attr({
        "class": "menu-item",
        "name": e.name,
        "price": e.price
      }).append(`<td>${e.name}</td><td>${e.price}</td>`);
      menu.append(rowInfo);
      
    });

    //$(".menu").append(menu);
  });
};