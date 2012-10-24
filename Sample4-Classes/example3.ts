/* 
    SAMPLE 4 - Classes
    ------------------

-   inheritance

*/

/// <reference path="../TS/jquery.d.ts" />

module DevEvening.Sample3 {

    // The BASE class
    // --------------
    class Vehicle {

        constructor (public name: string,
            public wheels: number) {
        }

        report() {
            return "This is a " + this.name +
                " which has " + this.wheels.toString() + " wheels";
        }

        // 'virtual' method
        getImgUrl() { throw ("getImgUrl not implemented"); }

        imgLink() { return "<img src='" + this.getImgUrl() + "' />"; }
    }


    // child class
    // -----------
    class Car extends Vehicle {

        constructor () {
            // call parent constructor
            super("Car", 4);
        }

        // override
        getImgUrl() { return "car.png"; }
    }

    // another child class
    class Motorbike extends Vehicle {

        constructor () {
            super("Motorbike", 2);
        }

        // override
        getImgUrl() { return "bike.png"; }
    }


    // ------------------------------

    $(document).ready(function () {
        // create a car
        var car = new Car();
        var bike = new Motorbike();

        // create an array of the base class
        var vehicles: Vehicle[] = [car, bike];

        var content = "";
        vehicles.forEach((v: Vehicle) {
            content += v.imgLink() + v.report() + "<br/>";
        });

        $("#content").html(content);
    });

}