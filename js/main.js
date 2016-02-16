  
  var googleData = {};
 
  function loadNews(json) { 
    googleData.news   = json.feed.entry; 
  }
  function loadEvents(json) { 
    googleData.events = json.feed.entry; 
  } 
  function loadPeople1(json) { 
    googleData.people1 = json.feed.entry; 
  }
  function loadPeople2(json) { 
    googleData.people2 = json.feed.entry; 
  } 

  
  var templates = collectTemplates("ceu-content");
  
  $(document).ready(function () {
    var events = getParsedGoogleData( googleData.events );
    fillTemplate( $("[ceu-content=events]"), templates.events, events );

    var news = getParsedGoogleData( googleData.news );
    fillTemplate( $("[ceu-content=news]"), templates.news, news,
       $("[ceu-content-readmore=news]"), calculateVisibleNews(news) );

    var people1 = getParsedGoogleData( googleData.people1 );
    fillTemplate( $("[ceu-content=people1]"), templates.people1, people1 );

    var people2 = getParsedGoogleData( googleData.people2 );
    fillTemplate( $("[ceu-content=people2]"), templates.people2, people2 );
    
    onEventsLoaded();
    
  });
  
  function calculateVisibleNews(news) {
    var result = 0;
    for (var i = 0; i<news.length; i++) 
        if (news[i].visibleByDefault)
            result++;
    
    return result;
  }