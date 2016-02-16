$(function() {


  var template = '<div class="popover ceu-popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>';
  $(".ceu-people1-container > div").each( function() {
  
    var gridX = +$(this).attr("grid-x");
    var gridY = +$(this).attr("grid-y");
   
    if (gridX > 0 && gridY > 0) {
        $(this)
            .css("left", (20*(gridX-1))+"%")
            .css("top",  (33.33333*(gridY-1))+"%");
            
        var placement = $(this).attr("popover-placement");
        placement = placement ? placement : "auto right";
        var html = "<h3>" + $(this).attr("popover-title") + "</h3>";
         html += "<h4>" + $(this).attr("popover-subtitle") + "</h4>";
         html += "<p>" + $(this).attr("popover-text") + "</p>";
        
        $(this).popover({
          content: html,
          html: true,
          placement: placement,
          trigger: "hover",
          template: template
        });
                    
    } 


    
  });

  
});