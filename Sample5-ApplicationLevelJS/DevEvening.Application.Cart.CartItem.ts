/// <reference path="DevEvening.Application.Product.ts" />
/// <reference path="DevEvening.Util.MathLib.ts" />
/// <reference path="DevEvening.Util.Web.ts" />
/// <reference path="..\TS\jquery.d.ts" />

/*
    DevEvening 'Cart' Demo

    Classes for shopping cart

*/


module DevEvening.Application.Cart {

    //
    // Class to hold a single Cart item
    //
    export class CartItem {
        Product: Product;
        Quantity: number;

        // constructor requires a product and quantity
        constructor (
            product: Product,
            quantity: number) {
            // ensure qty is integer
            this.Quantity = Math.round(quantity);

            // validate quantity field
            if (quantity <= 0) throw ("Invalid quantity");
            /// check product is valid
            if (!product.CanBePurchased()) throw ("Product " + product.Name + " cannot be sold");

            this.Product = product;
        }

        // calc QTY x PRICE
        public SubTotal() {
            return (this.Product.Price * this.Quantity);
        }

        // return subtotal as a formatted html currency value
        public SubTotalHtml() {
            return DevEvening.Util.MathLib.ToCurrency(this.SubTotal());
        }

        public ChangeQuantityBy(units: number) {
            var qty = Math.round(units);
            if ((qty + this.Quantity) < 0)
                throw ("Invalid change: there are only " + this.Quantity + " items");
            if ((qty + this.Quantity) == 0)
                throw ("Invalid change: would result in zero units. Remove from the cart instead");

            this.Quantity += qty;
        }



        // generate a cart Html table row
        public GetHtmlRow() {
            return "<tr>" +
                Util.Web.GetTD(Util.Web.HtmlEncode(this.Product.Name)) +
                Util.Web.GetTD(this.Product.PriceHtml(), true) +
                Util.Web.GetTD(this.Quantity.toString(), true) +
                Util.Web.GetTD(this.SubTotalHtml(), true) + "</tr>";
        }



    }

}