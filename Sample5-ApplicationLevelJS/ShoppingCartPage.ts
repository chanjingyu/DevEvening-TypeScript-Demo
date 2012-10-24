/// <reference path="..\TS\jquery.d.ts" />
/// <reference path="DevEvening.Application.Product.ts" />
/// <reference path="DevEvening.Application.Cart.CartItem.ts" />
/// <reference path="DevEvening.Application.Cart.ShoppingCart.ts" />

/* this is code just for the page */
module ShoppingCartPage {

    var repository: DevEvening.Application.ProductRepository;

    var myCart: DevEvening.Application.Cart.ShoppingCart;

    // initalise the products and cart
    $(document).ready(
        function () {
            // create repository
            repository = new DevEvening.Application.ProductRepository();

            // create the cart
            myCart = new DevEvening.Application.Cart.ShoppingCart();

            // show products
            UpdateProducts();
            UpdateCart();
            ErrMessage("");
        });

    // called by input button on the product table
    export function AddProductToCart(productCode: number, qty: number) {
        // clear current error
        ErrMessage("");

        // get product
        var product = repository.GetProductByCode(productCode);
        if (product == null) {
            ErrMessage("Unable to find product " + productCode.toString());
        }
        else {
            // add this product to cart
            myCart.Add(product, qty);
            UpdateCart();
            ErrMessage("Added " + product.NameHtml());
        }
    }

    export function ErrMessage(msg: string) {
        $("#cartError").text(msg);
    }

    function UpdateProducts() {
        $("#products").html(repository.GetProductTable());
    }

    export function UpdateCart() {
        $("#cart").html(myCart.GetCartTable());
    }

}
