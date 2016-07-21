var Translator = (function(translator) {


        var translate = {
            "merry": "alegre",
            "christmas": "navidad",
            "Merry": "Alegre",
            "Christmas": "Navidad",
            "and": "y",
            "happy": "feliz",
            "new": "nuevo",
            "year": "ano"
        };

        translator.translateToSpanish = function(text) {
            var spanish = text.split(' ');

            for (var i = 0; i < spanish.length; i++) {
                for (var key in translate) {
                    if (key === spanish[i]) {
                        spanish[i] = translate[key];
                     }
                }
            }
            return spanish.join(' ');
        }
        return translator;

    })(Translator);
