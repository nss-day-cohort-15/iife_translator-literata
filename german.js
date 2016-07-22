
var Translator = (function(translator){

    var translate = {
      'merry' :'Fr&#246;hlich',
      'christmas' : 'Weihnachten',
      'to' : 'nach',
      'you' : 'sie',
      'happy' : 'Gl&#252;cklich',
      'new' : 'Neu',
      'year' : 'Jahr',
      'have' : 'haben',
      'a' : 'ein'
    }

    translator.translateToGerman = function(text){
      var textArray = text.split(' ').map(e => e.split(/(\W)/));;

      var flattened = [].concat.apply([], textArray);

      var german = flattened.map(function(w){
      for(var k in translate){
        if(k === w.toLowerCase()){
          w = translate[k];
        }
      }
       return w;
      });

      //var germanString = german.join(' ');
      //    germanString = germanString.replace(/\s\W/g, germanString.match(/[^\w\s]/g)[0]);
      //
      //console.log(germanString);

      return german.join(' ');
    }

    return translator;

})(Translator);
