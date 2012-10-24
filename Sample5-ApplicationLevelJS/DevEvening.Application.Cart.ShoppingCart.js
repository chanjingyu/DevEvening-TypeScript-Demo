var DevEvening;
(function (DevEvening) {
    (function (Application) {
        (function (Cart) {
            var ShoppingCart = (function () {
                function ShoppingCart() {
                    this.items = new Array();
                }
                ShoppingCart.prototype.Add = function (product, quantity) {
                    var intQty = Math.round(quantity);
                    if(!product.CanBePurchased()) {
                        alert("Product " + product.Name + " is not permitted");
                        throw ("Attempted purchase of invalid: " + product.Name);
                    }
                    var tmpItem = this.GetItemFromCart(product);
                    if(tmpItem == null) {
                        tmpItem = new Cart.CartItem(product, intQty);
                        this.items[tmpItem.Product.Code] = tmpItem;
                    } else {
                        tmpItem.ChangeQuantityBy(intQty);
                    }
                };
                ShoppingCart.prototype.GetItemFromCart = function (product) {
                    if(this.IsProductInCart(product.Code)) {
                        return this.items[product.Code];
                    } else {
                        return null;
                    }
                };
                ShoppingCart.prototype.IsProductInCart = function (code) {
                    var match = this.items.filter(function (c, i, a) {
                        return (c.Product.Code == code);
                    });
                    return (match.length > 0);
                };
                ShoppingCart.prototype.IsEmpty = function () {
                    return (this.items.length == 0);
                };
                ShoppingCart.prototype.GetCartTable = function () {
                    if(this.IsEmpty()) {
                        return "<b>Your shopping cart is currently empty</b>";
                    }
                    var cartHtml = "<table><tr><th style='min-width: 200px;'>Product</th><th>Unit Price</th><th>Quantity</th>" + "<th>Subtotal</th></tr>";
                    this.items.forEach(function (c, i, a) {
                        cartHtml = cartHtml + c.GetHtmlRow();
                    });
                    cartHtml = cartHtml + "<tr style='color: blue;'><td colspan='3'>Total items:</td>" + DevEvening.Util.Web.GetTD(DevEvening.Util.MathLib.ToCurrency(this.GetCartTotal()), true) + "</tr></table>";
                    cartHtml = cartHtml + this.GetTotalItemsText();
                    return cartHtml;
                };
                ShoppingCart.prototype.GetTotalItemsText = function () {
                    var total = this.GetTotalItems();
                    if(total == 1) {
                        return "There is 1 item in your cart.";
                    } else {
                        return "There are " + total.toString() + " items in your shopping cart.";
                    }
                };
                ShoppingCart.prototype.GetCartTotal = function () {
                    var total = 0;
                    this.items.forEach(function (c) {
                        total = total + c.SubTotal();
                    });
                    return total;
                };
                ShoppingCart.prototype.GetTotalItems = function () {
                    var total = 0;
                    this.items.forEach(function (c) {
                        total = total + c.Quantity;
                    });
                    return total;
                };
                return ShoppingCart;
            })();
            Cart.ShoppingCart = ShoppingCart;            
        })(Application.Cart || (Application.Cart = {}));
        var Cart = Application.Cart;

    })(DevEvening.Application || (DevEvening.Application = {}));
    var Application = DevEvening.Application;

})(DevEvening || (DevEvening = {}));

