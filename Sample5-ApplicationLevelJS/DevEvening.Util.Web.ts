/// <reference path="..\TS\jquery.d.ts" />

/*
    DevEvening 'Cart' Demo

    Web utility library

*/

module DevEvening.Util.Web {

    /// html encode a string using jQuery
    export function HtmlEncode(value: string) {
        // not best practice but it will do for a demo
        return $('<div/>').text(value).html();
    }

    /// html decode a string using jQuery
    export function HtmlDecode(value: string) {
        // not best practice but it will do for a demo
        return $('<div/>').html(value).text();
    }

    export function GetTD(text: string, alignRight?: bool = false) {
        return "<td " +
            (alignRight ? " style='text-align:right;'>" : ">") +
            text + "</td>";
    }

}