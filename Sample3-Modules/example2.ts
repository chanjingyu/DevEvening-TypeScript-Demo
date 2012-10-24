/* 
    SAMPLE 3 - External Modules
    ---------------------------

- Reference .d.ts files which define types and interfaces

- no code generates, used in compile type-checking and intellisense

*/

/// <reference path="../TS/jquery.d.ts" />

// now $ and jQuery are defined so we can use them with IntelliSense

module DevEvening.Example2 {

    export function FillElementWithID(id: string) {
        // build jquery selector
        var idTag = "#" + id;
        var div = $(idTag);

        div.hide();
        // set and fade in..
        div.html("Is it time for Beer yet??");
        div.fadeIn(5000);
        div.css("font-size", "14pt");
        div.css

    }
}

// call the method
DevEvening.Example2.FillElementWithID("content");

