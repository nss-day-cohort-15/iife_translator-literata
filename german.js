
var Translator = (function(translator){

    var translate = {
      'Merry' :'Fröhlich',
      'merry' :'Fröhlich',
      'Christmas' : 'Weihnachten',
      'christmas' : 'Weihnachten',
      'to' : 'nach',
      'you' : 'Sie',
      'Happy' : 'Glücklich',
      'happy' : 'Glücklich',
      'New' : 'Neu',
      'new' : 'Neu',
      'Year' : 'Jahr',
      'year' : 'Jahr'
    }

    translator.translateToGerman = function(text){
      var array = text.split(' ');

        var german = array.map(function(w){
        for(var k in translate){
          if(k === w){
            w = translate[k];
          }
        }
         return w;
        });
        return german.join(' ');
    }

    return translator;

})(Translator);
