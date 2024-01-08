import cartPage from "../pages/cartPage";
import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import newUserDataPage from "../pages/newUserDataPage";
import createdAccountPage from "../pages/createdAccountPage";
import loggedUserPage from "../pages/loggedUserPage";
import paymentPage from "../pages/paymentPage";
import deleteAccountPage from "../pages/deleteAccountPage";

describe('Place Order: Register before Checkout', () => {
    it('should be able to create a new account before placing order', () => {

        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnLoginButton();
        loginPage.createAccount();
        newUserDataPage.fillNewUserData();
        createdAccountPage.elements.accountMessage().should('have.text', 'Account Created!');
        createdAccountPage.clickContinue();
        loggedUserPage.elements.loggedUserName().should('have.text', ' Logged in as Tester');
        homePage.clickOnBlueTopCartButton();
        homePage.clickOnContinueShopping();
        homePage.clickOnCartButton();
        cartPage.elements.shoppingCartBreadcrumbs().should('have.text', 'Shopping Cart');
        cartPage.clickOnCheckoutButton();
        cartPage.checkDeliverAddress();
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