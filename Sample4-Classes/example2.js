var DevEvening;
(function (DevEvening) {
    var Tracker = (function () {
        function Tracker() {
            this.count = 0;
        }
        Tracker.prototype.start = function () {
            var div = $("#content");
            window.onmousemove = function (e) {
                this.count++;
                div.html("Moves made: <b>" + this.count.toString() + "</b>");
            };
        };
        return Tracker;
    })();    
    $(document).ready(function () {
        var t = new Tracker();
        t.start();
    });
})(DevEvening || (DevEvening = {}));

