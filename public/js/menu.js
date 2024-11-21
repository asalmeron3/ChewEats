function showRestMenu(restId){
  $(".menu-box").empty();
  let menu = $("<table>").attr("class", "menu");

  $.get("/api/menu-items/"+ restId, function(data){
    data.forEach(e => {
      //let menu = $("<div>").attr("class", "menu");
      //let menuItem = $("<div>").attr("class", "menu-item");
      menu.append(`<tr><td> ${e.name}</td><td>${e.price}</td></tr>`);
    });

    $(".menu-box").append(menu);
  });
};