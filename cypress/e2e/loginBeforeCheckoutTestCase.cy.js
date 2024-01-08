import loggedUserPage from "../pages/loggedUserPage";
import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import cartPage from "../pages/cartPage";
import paymentPage from "../pages/paymentPage";
import deleteAccountPage from "../pages/deleteAccountPage";

describe('Place Order: Login before Checkout', () => {

    before(() => {
        cy.createUser();
    })

    it('Should be possible to login and make order', () => {
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnLoginButton();
        loginPage.correctloginToAccount();
        loginPage.clickLoginButton();
        loggedUserPage.elements.loggedUserName().should('have.text', ' Logged in as Tester');
        homePage.clickOnBlueTopCartButton();
        homePage.clickOnContinueShopping();
        loggedUserPage.clickCartButton();
        cartPage.clickOnCheckoutButton();
        cartPage.checkProductDetails();
        cartPage.addCommentToOrder();
        cartPage.clickOnPlaceOrderButton();
        paymentPage.fillCardData();
        paymentPage.confirmAndPay();
        paymentPage.elements.orderMessage().should('have.text', 'Congratulations! Your order has been confirmed!');
        loggedUserPage.deleteAccount();
        deleteAccountPage.elements.accountDeletedMessage().should('have.text', 'Account Deleted!');
        deleteAccountPage.continueButton();
    })

})