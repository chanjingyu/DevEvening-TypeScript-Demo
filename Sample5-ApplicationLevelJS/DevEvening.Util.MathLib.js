var DevEvening;
(function (DevEvening) {
    (function (Util) {
        (function (MathLib) {
            function Round(value, places) {
                if (typeof places === "undefined") { places = 2; }
                var multiplier = Math.pow(10, Math.round(places));
                return Math.round(value * multiplier) / multiplier;
            }
            MathLib.Round = Round;
            function ToCurrency(value, symbol) {
                if (typeof symbol === "undefined") { symbol = "&pound;"; }
                return symbol + value.toFixed(2);
            }
            MathLib.ToCurrency = ToCurrency;
        })(Util.MathLib || (Util.MathLib = {}));
        var MathLib = Util.MathLib;

    })(DevEvening.Util || (DevEvening.Util = {}));
    var Util = DevEvening.Util;

})(DevEvening || (DevEvening = {}));

