chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  var query = encodeURIComponent(selection[0] || '汉典')
  document.querySelector('iframe').src = 
    'http://www.zdic.net/search/?c=3&q=' + query
});
