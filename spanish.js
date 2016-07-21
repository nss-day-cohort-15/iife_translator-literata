var Translator = (function(translator) {


        var translate = {
            "merry": "Alegre",
            "christmas": "Navidad",
            "and": "y",
            "happy": "Feliz",
            "new": "Nuevo",
            "year": "Ano"
        };

        translator.translateToSpanish = function(text) {
            var spanish = text.split(' ');

            for (var i = 0; i < spanish.length; i++) {
                for (var key in translate) {
                    if (key === spanish[i].toLowerCase()) {
                        spanish[i] = translate[key];
                     }
                }
            }
            return spanish.join(' ');
        }
        return translator;

    })(Translator);
