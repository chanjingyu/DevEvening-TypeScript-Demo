var DevEvening;
(function (DevEvening) {
    (function (Example2) {
        function FillElementWithID(id) {
            var idTag = "#" + id;
            var div = $(idTag);
            div.hide();
            div.html("Is it time for Beer yet??");
            div.fadeIn(5000);
            div.css("font-size", "14pt");
            div.css;
        }
        Example2.FillElementWithID = FillElementWithID;
    })(DevEvening.Example2 || (DevEvening.Example2 = {}));
    var Example2 = DevEvening.Example2;

})(DevEvening || (DevEvening = {}));

DevEvening.Example2.FillElementWithID("content");
