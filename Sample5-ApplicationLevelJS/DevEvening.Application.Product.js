var DevEvening;
(function (DevEvening) {
    (function (Application) {
        var Product = (function () {
            function Product(code, name, price, isActive) {
                if (typeof isActive === "undefined") { isActive = true; }
                if(name == "") {
                    throw ("Name must be not be blank");
                }
                if(price <= 0) {
                    throw ("Price must be higher than zero");
                }
                this.Code = code;
                this.Name = name.trim();
                this.Price = DevEvening.Util.MathLib.Round(price, 2);
                this.IsActive = isActive;
            }
            Product.prototype.CanBePurchased = function () {
                return (this.IsActive);
            };
            Product.prototype.PriceHtml = function () {
                return DevEvening.Util.MathLib.ToCurrency(this.Price);
            };
            Product.prototype.NameHtml = function () {
                return DevEvening.Util.Web.HtmlEncode(this.Name);
            };
            return Product;
        })();
        Application.Product = Product;        
        var ProductRepository = (function () {
            function ProductRepository() {
                this.ProductList = new Array();
                this.Add(new Product(100, "Pizza", 5.95, true));
                this.Add(new Product(102, "Beer", 1.95, true));
                this.Add(new Product(103, "Red Bull", 1.99, true));
                this.Add(new Product(104, "Quiche", 0.99, false));
            }
            ProductRepository.prototype.Add = function (product) {
                if(this.ProductCodeExists(product.Code)) {
                    alert("Cannot add " + product.Code + ", already added");
                }
                this.ProductList[product.Code] = product;
            };
            ProductRepository.prototype.GetProductByCode = function (code) {
                if(this.ProductCodeExists(code)) {
                    return this.ProductList[code];
                } else {
                    return null;
                }
            };
            ProductRepository.prototype.ProductCodeExists = function (productCode) {
                var match = this.ProductList.filter(function (p, i) {
                    return (p.Code == productCode);
                });
                var len = match.length;
                return (len > 0);
            };
            ProductRepository.prototype.GetProductTable = function () {
                var _this = this;
                var result = "<table>" + "<tr><th style='min-width: 200px;'>Product Name</th><th>Price</th><th></th></tr>";
                this.ProductList.forEach(function (p, index, array) {
                    result = result.concat(_this.GetTableRow(p));
                });
                result = result.concat("</table>");
                return result;
            };
            ProductRepository.prototype.GetTableRow = function (p) {
                var id = "qty" + p.Code.toString();
                return "<tr>" + this.GetTD(p.NameHtml()) + this.GetTD(p.PriceHtml()) + this.GetTD(this.GetAddControl(p)) + "</tr>";
            };
            ProductRepository.prototype.GetTD = function (value) {
                return "<td>" + value + "</td>";
            };
            ProductRepository.prototype.GetAddControl = function (p) {
                if(p.CanBePurchased()) {
                    var codeText = p.Code.toString();
                    return "<input type='button' value='Add to Cart' " + "onclick='ShoppingCartPage.AddProductToCart(" + codeText + ", 1);' />";
                }
                return "<i>Sorry, not on sale</i>";
            };
            return ProductRepository;
        })();
        Application.ProductRepository = ProductRepository;        
    })(DevEvening.Application || (DevEvening.Application = {}));
    var Application = DevEvening.Application;

})(DevEvening || (DevEvening = {}));

