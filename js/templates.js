
  function collectTemplates(attrName) {
    var templates = {};
    $("["+attrName+"]").each( function() {
      var name = $(this).attr(attrName);
      var html = $(this).html();
      templates[name] = html;
    });
    return templates;
  }

  
  function fillTemplate( $node, template, data, $readMoreNode, groupLimit ) { 
    $node.html("");
    addItems( $node, template, data, $readMoreNode, groupLimit, 0 );
    $node.fadeIn();
  }
  
  function addItems( $node, template, data, $readMoreNode, groupLimit, groupStart ) { 
    if (jQuery.isArray( data )) {
      var groupEnd = groupLimit ? Math.min( data.length, groupStart + groupLimit ) : data.length;
      for (var i = groupStart; i< groupEnd; i++) {
        var result = template;
        var record = data[i];
        for (key in record)
          result = result.replace(new RegExp("{{"+key+"}}", 'g'), record[key]); 
        
        result = result.replace(new RegExp("{{.+}}", 'g'), ""); //empty fields
        $node.append(result);
      }   
      
      if ($readMoreNode) {
        if (data.length > groupEnd) {
          $readMoreNode
            .unbind("click")
            .click(function(e) {
              e.preventDefault();
              addItems( $node, template, data, $readMoreNode, groupLimit, groupEnd );          
            })
            .show();
        } else {
          $readMoreNode.hide();
        }
      }
    }
  }