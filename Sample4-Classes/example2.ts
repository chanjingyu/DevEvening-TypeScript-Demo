/* 
    SAMPLE 4 - Classes
    ------------------

- "the wrong this" --- that=this / _this = this

- "Lexical scoping" lambda syntax

*/
/// <reference path="../TS/jquery.d.ts" />

module DevEvening {

    class Tracker {
        count = 0;

        start() {

            var div = $("#content");

            window.onmousemove = function (e) {
                this.count++;
                div.html("Moves made: <b>" + this.count.toString() + "</b>");

            }
        }
    }

    $(document).ready(function () {

        var t = new Tracker();
        t.start();
    });

    /*
    The fix:
    
      window.onmousemove = e => {
                this.count++;
                div.html("Moves made: " + this.count.toString());
    */
}