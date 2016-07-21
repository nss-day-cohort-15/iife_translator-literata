
var Translator = (function(){
  var selectedLanguage = document.getElementById('language');
  var textEntered = document.getElementById('card-input');
  var button = document.getElementById("button");

  function getInput(){
    textEntered = textEntered.value;
    selectedLanguage = selectedLanguage.value;
    //Translator[translateTo + selectedLanguage](textEntered);
    Translator.translateToSpanish(textEntered);
  }

  button.addEventListener("click", getInput);

  return {};

})()
