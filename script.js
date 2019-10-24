let colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];
$(function() { 
  var buttonClick = function() {
    $.getJSON(
      "https://sheetsu.com/apis/v1.0su/3cc8e3b7eca3.json",
      //"https://brazen-roquefort.glitch.me/team-quotes.json",
      function(data) {
        
        //Quote Management
        var i = Math.floor(Math.random() * data.length);
        var quote = data[i].quote;
        var author = data[i].author;     
        $("#quote").text("  " + quote);
		    $("#author").text("  " + author);
        $("#author").text("-" + author);
        
        //Color Management
        var icolor = Math.floor(Math.random() * colors.length);
        $("#container").css("background-color", colors[icolor]);
        $("button").css("background-color", colors[icolor]);
        $("#text").css("color", colors[icolor]);
        $("#t i").css("color", colors[icolor]);
        $("#author").css("color", colors[icolor]);
        
      }
    );
  setTimeout(buttonClick, 20000);
  };
  buttonClick();
  $("#new-quote").click(buttonClick);
});