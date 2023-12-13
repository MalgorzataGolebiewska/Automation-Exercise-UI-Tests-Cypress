import homePage from "../pages/homePage";
import cartPage from "../pages/cartPage";

describe('Subscription on cart page Test Case', () => {

    it('Should get subscription in cart page', () => {
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnCartButton();
        cartPage.elements.subscriptionText().should('have.text','Subscription');
        cartPage.getSubscription();
        cartPage.elements.subscriptionMessage().should('have.text', 'You have been successfully subscribed!')
    })
})