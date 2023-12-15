import homePage from "../pages/homePage";
import viewProductPage from "../pages/viewProductPage";
import cartPage from "../pages/cartPage";
describe('Verify Product Quantity In Cart', () => {

    it('Should contain the changed quantity in the cart', () => {
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnViewProduct();
        viewProductPage.elements.productInformation().should('have.text', 'Blue Top');
        viewProductPage.changeQuantity();
        viewProductPage.addToCart();
        viewProductPage.viewCart();
        cartPage.elements.firstQuantityTD().should('have.text', '4')

    })
})