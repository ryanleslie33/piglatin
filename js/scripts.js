const vowels = ["a", "e", "i", "o", "u"];
const legalValues = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var isLegal = function(word) {
  for(var i = 0; i < word.length; i++) {
    var letterLegal = false;
    for(var j = 0; j < legalValues.length; j++) {
      if(word.slice(i, i+1) === legalValues[j]) {
        letterLegal = true;
        break;
      }
    }
    if(!letterLegal) {
      return false;
    }
  }
  return true;
};

var isVowel = function(letter, pointInWord, word) {
  if(letter === "u" && pointInWord > 0 && word.slice(pointInWord - 1, pointInWord) === "q") {
    return false;
  }
  for(var i = 0; i < vowels.length; i++) {
    if(vowels[i] === letter) {
      return true;
    } else if(pointInWord > 0 && letter === "y") {
      return true;
    }
  }
  return false;
};

var findFirstVowel = function(word) {
  for(var i = 0; i < word.length; i++) {
    if(isVowel(word.slice(i, i+1), i, word)) {
      return i;
    }
  }
};

var pigLatin = function(word) {
  var firstVowel = findFirstVowel(word);
  var frontPortion = word.slice(0, firstVowel);
  var newWord;
  if(firstVowel === 0) {
    newWord = word.concat("way");
  } else {
    newWord = word.slice(firstVowel) + frontPortion + "ay";
  }
  return newWord;
};

var isNotWord = function(word) {
  return false;
};

$(document).ready(function() {
  $("#pig").submit(function(event) {
    event.preventDefault();
    var word = $("#latin").val().toLowerCase();
    if(!isLegal(word)) {
      $("#not-word").show();
      $("#results").hide();
    } else {
      if(isNotWord(word)) {
        $("#not-word").show();
        return;
      }
      var newWord = pigLatin(word);
      $("#output").text(newWord);
      $("#results").show();
      $("#not-word").hide();
    }
  });
});
