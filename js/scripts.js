const vowel = ["a", "e", "i", "o", "u"];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function pigLatin(word){
  for (var index = 0; index < vowel.length; index ++){
    if (word.slice(0,1) === vowel[index]){
      return word + "way";

    }

  }
  for(var index = 0; index < word.length; index ++){
    for(var index2 = 0; index2 < vowel.length; index2 ++){
      if(word.slice(index, index + 1) === vowel[index2]){
        if(word.slice(index -1,index + 1) === "qu"){
          return word.slice(index + 1) + word.slice(0,index +1) + "ay";
        }
        return word.slice(index) + word.slice(0, index) + "ay";
      }
    }
  }
  return word.slice(1) + word.slice(0,1) + "ay";
}

function isIllegal(word) {
  if(word === "") {
    return true;
  }
  for(var index = 0; index < word.length; index ++){
    var bad = true;
    for( var index2 = 0; index2 < letters.length; index2 ++){
      if(word.slice(index,index + 1) === letters[index2]){
        bad =  false;
      }

    }
    if(bad){
      return true;
    }
  }
  return false;
}





$(document).ready(function() {
  $("#pig").submit(function(event) {
    event.preventDefault();
    var word = $("#userinput").val().toLowerCase();
    debugger;
    if(isIllegal(word)){
      $("#not-word").show();
      $("#results").hide();
      return;
    }
    var pigWord = pigLatin(word);


    $("#output").text(pigWord);
$("#not-word").hide();
$("#results").show();
  });
});
