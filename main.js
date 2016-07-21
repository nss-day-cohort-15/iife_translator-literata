
var Translator = (function(){
  var lanuageSelector = document.getElementById('language');
  var cardInput = document.getElementById('card-input');
  var button = document.getElementById("button");
  var addMessage = document.getElementById('translated-text');

  function getInput(){
    var textEntered = cardInput.value;
    var selectedLanguage = lanuageSelector.value;

    addMessage.innerHTML = `<marquee> ${Translator['translateTo' + selectedLanguage](textEntered)} </marquee>`;
  }

  button.addEventListener("click", getInput);

  return {};

})()
