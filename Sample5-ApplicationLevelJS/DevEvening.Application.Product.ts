/// <reference path="DevEvening.Util.MathLib.ts" />
/// <reference path="DevEvening.Util.Web.ts" />

/*
    DevEvening 'Cart' Demo

    Product class

*/

module DevEvening.Application {

    export class Product {
        Code: number;

        Name: string;

        Price: number;

        IsActive: bool;

        constructor (
            code: number,
            name: string,
            price: number,
            isActive: bool = true) {
            if (name == "") throw ("Name must be not be blank");
            if (price <= 0) throw ("Price must be higher than zero");
            this.Code = code;
            this.Name = name.trim();
            this.Price = DevEvening.Util.MathLib.Round(price, 2);
            this.IsActive = isActive;
        }

        public CanBePurchased() {
            return (this.IsActive);
        }

        // price as currency html
        PriceHtml() { return Util.MathLib.ToCurrency(this.Price); }

        // name encoded as html
        NameHtml() { return Util.Web.HtmlEncode(this.Name); }

    }

    /// <summary>Product repository</summary>
    export class ProductRepository {
        // list of products
        ProductList: Product[];

        constructor () {
            // initalize list
            this.ProductList = new Product[];
            
            // create some test products - in a real application
            // we would probably get the data via JSON AJAX call
            this.Add(new Product(100, "Pizza", 5.95, true));
            this.Add(new Product(102, "Beer", 1.95, true));
            this.Add(new Product(103, "Red Bull", 1.99, true));
            this.Add(new Product(104, "Quiche", 0.99, false));
        }

        public Add(product: Product) {
            // check for duplicate code
            if (this.ProductCodeExists(product.Code)) {
                alert("Cannot add " + product.Code + ", already added");
                //throw ("Duplicate product " + product.Code);
            }
            this.ProductList[product.Code] = product;
        }

        // get product using code
        public GetProductByCode(code: number) {
            if (this.ProductCodeExists(code)) {
                return this.ProductList[code];
            }
            else
                return null;
        }

        // see if item exists
        public ProductCodeExists(productCode: number) {
            var match = this.ProductList.filter((p: Product, i: number) {
                return (p.Code == productCode);
            });
            var len = match.length;
            return (len > 0);
            //return (match == null);
        }

        public GetProductTable() {
            var result = "<table>" +
            "<tr><th style='min-width: 200px;'>Product Name</th><th>Price</th><th></th></tr>";

            this.ProductList.forEach(
                (p: Product, index: number, array: Product[]) {
                    result = result.concat(this.GetTableRow(p));
                });

            result = result.concat("</table>");
            return result;
        }

        private GetTableRow(p: Product) {
            var id = "qty" + p.Code.toString();

            return "<tr>" +
                this.GetTD(p.NameHtml()) +
                this.GetTD(p.PriceHtml()) +
                this.GetTD(this.GetAddControl(p)) +
                "</tr>";
        }

        private GetTD(value: string) {
            return "<td>" + value + "</td>";
        }

        private GetAddControl(p: Product) {
            // input control ID, if we can sell this!
            if (p.CanBePurchased()) {
                var codeText = p.Code.toString();
                return "<input type='button' value='Add to Cart' " +
                    "onclick='ShoppingCartPage.AddProductToCart(" +
                    codeText + ", 1);' />";
            }
            // not for sale
            return "<i>Sorry, not on sale</i>";
        }
    }
}
