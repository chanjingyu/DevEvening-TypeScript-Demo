var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var DevEvening;
(function (DevEvening) {
    (function (Sample3) {
        var Vehicle = (function () {
            function Vehicle(name, wheels) {
                this.name = name;
                this.wheels = wheels;
            }
            Vehicle.prototype.report = function () {
                return "This is a " + this.name + " which has " + this.wheels.toString() + " wheels";
            };
            Vehicle.prototype.getImgUrl = function () {
                throw ("getImgUrl not implemented");
            };
            Vehicle.prototype.imgLink = function () {
                return "<img src='" + this.getImgUrl() + "' />";
            };
            return Vehicle;
        })();        
        var Car = (function (_super) {
            __extends(Car, _super);
            function Car() {
                        _super.call(this, "Car", 4);
            }
            Car.prototype.getImgUrl = function () {
                return "car.png";
            };
            return Car;
        })(Vehicle);        
        var Motorbike = (function (_super) {
            __extends(Motorbike, _super);
            function Motorbike() {
                        _super.call(this, "Motorbike", 2);
            }
            Motorbike.prototype.getImgUrl = function () {
                return "bike.png";
            };
            return Motorbike;
        })(Vehicle);        
        $(document).ready(function () {
            var car = new Car();
            var bike = new Motorbike();
            var vehicles = [
                car, 
                bike
            ];
            var content = "";
            vehicles.forEach(function (v) {
                content += v.imgLink() + v.report() + "<br/>";
            });
            $("#content").html(content);
        });
    })(DevEvening.Sample3 || (DevEvening.Sample3 = {}));
    var Sample3 = DevEvening.Sample3;

})(DevEvening || (DevEvening = {}));

