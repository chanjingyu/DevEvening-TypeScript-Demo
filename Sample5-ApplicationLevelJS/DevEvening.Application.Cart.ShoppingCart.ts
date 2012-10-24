/// <reference path="DevEvening.Application.Cart.CartItem.ts" />
/// <reference path="DevEvening.Application.Product.ts" />
/// <reference path="DevEvening.Util.MathLib.ts" />
/// <reference path="DevEvening.Util.Web.ts" />
/// <reference path="..\TS\jquery.d.ts" />

/*
    DevEvening 'Cart' Demo

    Classes for shopping cart

*/


module DevEvening.Application.Cart {

    export class ShoppingCart {

        // internal list of cart items
        items: CartItem[];

        constructor () {
            this.items = new CartItem[];
        }

        // add a new product + quantity
        public Add(product: Product, quantity: number) {
            // clean up Qty
            var intQty = Math.round(quantity);

            // is this permitted?
            if (!product.CanBePurchased()) {
                alert("Product " + product.Name + " is not permitted");
                throw ("Attempted purchase of invalid: " + product.Name);
            }

            // check cart for existing
            var tmpItem = this.GetItemFromCart(product);

            // check for not found
            if (tmpItem == null) {
                // add a new item
                tmpItem = new CartItem(product, intQty);
                this.items[tmpItem.Product.Code] = tmpItem;
            }
            else {
                // increment the existing entry
                tmpItem.ChangeQuantityBy(intQty);
            }

        }


        // Search cart to see if there is an existing item
        // for this product
        private GetItemFromCart(product: Product) {
            if (this.IsProductInCart(product.Code)) {
                // use product code as Key
                return this.items[product.Code];
            }
            else {
                return null;
            }
        }

        private IsProductInCart(code: number) {
            var match = this.items.filter((c: CartItem, i: number, a: CartItem[]) {
                return (c.Product.Code == code);
            });
            return (match.length > 0);
        }

        public IsEmpty() { return (this.items.length == 0); }

        public GetCartTable() {
            // is it empty?
            if (this.IsEmpty())
                return "<b>Your shopping cart is currently empty</b>";

            // define header
            var cartHtml = "<table><tr><th style='min-width: 200px;'>Product</th><th>Unit Price</th><th>Quantity</th>" +
                "<th>Subtotal</th></tr>";
            // add cart items
            this.items.forEach(
                (c: CartItem, i: number, a: CartItem[]) {
                    cartHtml = cartHtml + c.GetHtmlRow();
                });
            // add footer with total
            cartHtml = cartHtml + "<tr style='color: blue;'><td colspan='3'>Total items:</td>" +
                Util.Web.GetTD(Util.MathLib.ToCurrency(this.GetCartTotal()), true) +
                "</tr></table>";

            cartHtml = cartHtml + this.GetTotalItemsText();
            return cartHtml;
        }

        private GetTotalItemsText() {
            var total = this.GetTotalItems();
            if (total==1)
                return "There is 1 item in your cart.";
            else
                return "There are " + total.toString() + 
                    " items in your shopping cart.";
        }

        public GetCartTotal() {
            var total = 0;
            this.items.forEach(
                (c: CartItem) { total = total + c.SubTotal(); });
            return total;
        }

        public GetTotalItems() {
            var total = 0;
            this.items.forEach(
                (c: CartItem) { total = total + c.Quantity; });
            return total;

        }
    }

}
