var pigLatin = function(word) {
  return word;
}

var isNotWord = function(word) {
  return false;
}

$(document).ready(function() {
  $("#pig").submit(function(event) {
    event.preventDefault();
    var word = $("#latin").val();
    if(isNotWord(word)) {
      $("#not-word").show();
      return;
    }
    var newWord = pigLatin(word);
    $("#output").text(word);
    $("#results").show();
    $("#not-word").hide();
  });
});
