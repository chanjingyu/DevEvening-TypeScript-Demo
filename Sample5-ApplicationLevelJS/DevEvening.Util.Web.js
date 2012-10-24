var DevEvening;
(function (DevEvening) {
    (function (Util) {
        (function (Web) {
            function HtmlEncode(value) {
                return $('<div/>').text(value).html();
            }
            Web.HtmlEncode = HtmlEncode;
            function HtmlDecode(value) {
                return $('<div/>').html(value).text();
            }
            Web.HtmlDecode = HtmlDecode;
            function GetTD(text, alignRight) {
                if (typeof alignRight === "undefined") { alignRight = false; }
                return "<td " + (alignRight ? " style='text-align:right;'>" : ">") + text + "</td>";
            }
            Web.GetTD = GetTD;
        })(Util.Web || (Util.Web = {}));
        var Web = Util.Web;

    })(DevEvening.Util || (DevEvening.Util = {}));
    var Util = DevEvening.Util;

})(DevEvening || (DevEvening = {}));

