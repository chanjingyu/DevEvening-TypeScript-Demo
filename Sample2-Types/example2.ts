/* 
    SAMPLE 2 - Types
    -----------------

-   Interface
-   Declare
    
*/

interface Thing {
    a: number;
    b: string;
    //c: (names: string[], count:number) => string;
}



function example2(data: Thing) {
    return data.b;
}

// call the method
var thingData = { a: 123, b: "Hello Thing", c: 4 };

document.getElementById("content").innerHTML = example2(thingData);
// $("#content").html(example2(thingData));

/*

// makes jQuery work at a very basic level
declare var $: any;

*/


/*

interface knockout {
    observable(string): any;
    observable(number): any;
    observableArray(array? ): any;
    applyBindings(): void;
}

declare var ko: knockout;

var somevar = ko.observable("test");

*/

