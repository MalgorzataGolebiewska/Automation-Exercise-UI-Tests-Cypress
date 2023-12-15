import homePage from "../pages/homePage";
import productsPage from "../pages/productsPage";
import cartPage from "../pages/cartPage";

describe('Add Products in Cart', () => {
    it('Should be possible to add two products to the cart', () => {
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnProductsButton();
        productsPage.addFirstProduct();
        productsPage.continueShopping();
        productsPage.addSecondProduct();
        productsPage.viewCart();
        cartPage.elements.firstProduct().should('have.text', 'Blue Top');
        cartPage.elements.secondProduct().should('have.text', 'Men Tshirt');
        cartPage.elements.firstPriceTD().should('have.text', 'Rs. 500');
        cartPage.elements.firstQuantityTD().should('have.text', 1);
        cartPage.elements.firstTotalTD().should('have.text', 'Rs. 500');
        cartPage.elements.secondPriceTD().should('have.text', 'Rs. 400');
        cartPage.elements.secondQuantityTD().should('have.text', '1');
        cartPage.elements.secondTotalTD().should('have.text', 'Rs. 400')
    })
})