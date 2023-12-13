import homePage from "../pages/homePage";

describe('Verify Test Case Page', () => {

    it('Should be navigated to test case page', () => {
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.scrollDown();
        homePage.elements.subscriptionText().should('have.text', 'Subscription');
        homePage.getSubscription();
        homePage.elements.subscriptionMessage().should('have.text', 'You have been successfully subscribed!')
    })
})