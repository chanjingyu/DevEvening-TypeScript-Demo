var DevEvening;
(function (DevEvening) {
    (function (Application) {
        (function (Cart) {
            var CartItem = (function () {
                function CartItem(product, quantity) {
                    this.Quantity = Math.round(quantity);
                    if(quantity <= 0) {
                        throw ("Invalid quantity");
                    }
                    if(!product.CanBePurchased()) {
                        throw ("Product " + product.Name + " cannot be sold");
                    }
                    this.Product = product;
                }
                CartItem.prototype.SubTotal = function () {
                    return (this.Product.Price * this.Quantity);
                };
                CartItem.prototype.SubTotalHtml = function () {
                    return DevEvening.Util.MathLib.ToCurrency(this.SubTotal());
                };
                CartItem.prototype.ChangeQuantityBy = function (units) {
                    var qty = Math.round(units);
                    if((qty + this.Quantity) < 0) {
                        throw ("Invalid change: there are only " + this.Quantity + " items");
                    }
                    if((qty + this.Quantity) == 0) {
                        throw ("Invalid change: would result in zero units. Remove from the cart instead");
                    }
                    this.Quantity += qty;
                };
                CartItem.prototype.GetHtmlRow = function () {
                    return "<tr>" + DevEvening.Util.Web.GetTD(DevEvening.Util.Web.HtmlEncode(this.Product.Name)) + DevEvening.Util.Web.GetTD(this.Product.PriceHtml(), true) + DevEvening.Util.Web.GetTD(this.Quantity.toString(), true) + DevEvening.Util.Web.GetTD(this.SubTotalHtml(), true) + "</tr>";
                };
                return CartItem;
            })();
            Cart.CartItem = CartItem;            
        })(Application.Cart || (Application.Cart = {}));
        var Cart = Application.Cart;

    })(DevEvening.Application || (DevEvening.Application = {}));
    var Application = DevEvening.Application;

})(DevEvening || (DevEvening = {}));

