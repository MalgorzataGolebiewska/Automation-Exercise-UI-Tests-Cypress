import cartPage from "../pages/cartPage";
import homePage from "../pages/homePage";


describe('Remove Products From Cart', () => {

    it('Should be possible to remove blue top from cart', () => {
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnWinterTopCartButton();
        homePage.clickOnContinueShopping();
        homePage.clickOnBlueTopCartButton();
        homePage.clickOnContinueShopping();
        homePage.clickOnCartButton();
        cartPage.elements.shoppingCartBreadcrumbs().should('have.text','Shopping Cart');
        cartPage.deletBlueTopFromCart();
        cartPage.elements.cartDescription().should('have.text','Winter Top').and('not.have.text','Blue Top')
    })
})