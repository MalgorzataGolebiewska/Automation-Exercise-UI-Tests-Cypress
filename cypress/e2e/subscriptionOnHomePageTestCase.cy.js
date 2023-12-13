import homePage from "../pages/homePage";

describe('Subscription on home page Test Case', () => {

    it('Should get subscription in home page', () => {
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.scrollDown();
        homePage.elements.subscriptionText().should('have.text', 'Subscription');
        homePage.getSubscription();
        homePage.elements.subscriptionMessage().should('have.text', 'You have been successfully subscribed!')
    })
})