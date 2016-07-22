
var Translator = (function(translator){

    // var translate = {
    //   'merry' :'Fröhlich',
    //   'christmas' : 'Weihnachten',
    //   'to' : 'nach',
    //   'you' : 'Sie',
    //   'happy' : 'Glücklich',
    //   'new' : 'Neu',
    //   'year' : 'Jahr'
    // }

    var translate = {
      'merry' :`Fr&#246;hlich`,
      'christmas' : 'Weihnachten',
      'to' : 'nach',
      'you' : 'Sie',
      'happy' : 'Gl&#252;cklich',
      'new' : 'Neu',
      'year' : 'Jahr'
    }

    translator.translateToGerman = function(text){
      var textArray = text.split(' ');
          textArray = textArray.map(e => e.split(/(\W)/));

      var flattened = [].concat.apply([], textArray);

      var german = flattened.map(function(w){
      for(var k in translate){
        if(k === w.toLowerCase()){
          w = translate[k];
        }
      }
       return w;
      });
      return german.join(' ');
    }

    return translator;

})(Translator);
