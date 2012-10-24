var ShoppingCartPage;
(function (ShoppingCartPage) {
    var repository;
    var myCart;
    $(document).ready(function () {
        repository = new DevEvening.Application.ProductRepository();
        myCart = new DevEvening.Application.Cart.ShoppingCart();
        UpdateProducts();
        UpdateCart();
        ErrMessage("");
    });
    function AddProductToCart(productCode, qty) {
        ErrMessage("");
        var product = repository.GetProductByCode(productCode);
        if(product == null) {
            ErrMessage("Unable to find product " + productCode.toString());
        } else {
            myCart.Add(product, qty);
            UpdateCart();
            ErrMessage("Added " + product.NameHtml());
        }
    }
    ShoppingCartPage.AddProductToCart = AddProductToCart;
    function ErrMessage(msg) {
        $("#cartError").text(msg);
    }
    ShoppingCartPage.ErrMessage = ErrMessage;
    function UpdateProducts() {
        $("#products").html(repository.GetProductTable());
    }
    function UpdateCart() {
        $("#cart").html(myCart.GetCartTable());
    }
    ShoppingCartPage.UpdateCart = UpdateCart;
})(ShoppingCartPage || (ShoppingCartPage = {}));

