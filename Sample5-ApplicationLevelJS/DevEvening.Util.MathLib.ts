
/*
    DevEvening 'Cart' Demo

    MathLib utility library

*/

module DevEvening.Util.MathLib {

    ///<summary>Round a number to N places</summary>
    export function Round(
        value: number, 
        places: number = 2) {
        var multiplier = Math.pow(10, Math.round(places));
        return Math.round(value * multiplier) / multiplier;
    }

    // Write a number as 
    export function ToCurrency(value: number, 
        symbol?: string = "&pound;") {
        return symbol + value.toFixed(2);
    }
}