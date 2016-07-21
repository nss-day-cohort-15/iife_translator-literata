
var Translator = (function(){
  var lanuageSelector = document.getElementById('language');
  var cardInput = document.getElementById('card-input');
  var button = document.getElementById("button");
  var addMessage = document.getElementById('translated-text');

  function getInput(){
    var textEntered = cardInput.value;
    var selectedLanguage = lanuageSelector.value;

    console.log(textEntered)
    console.log(selectedLanguage)

    addMessage.innerHTML = `<h1> ${Translator['translateTo' + selectedLanguage](textEntered)} </h1>`;
  }

  button.addEventListener("click", getInput);

  return {};

})()
