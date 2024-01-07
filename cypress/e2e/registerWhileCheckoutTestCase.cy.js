import homePage from "../pages/homePage";
import cartPage from "../pages/cartPage";
import loginPage from "../pages/loginPage";
import newUserDataPage from "../pages/newUserDataPage";
import createdAccountPage from "../pages/createdAccountPage";
import loggedUserPage from "../pages/loggedUserPage";
import paymentPage from "../pages/paymentPage";

describe('Place Order: Register while Checkout', () => {
    it('Should be possible to create new account from the cart', () => {
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnBlueTopCartButton();
        homePage.clickOnContinueShopping();
        homePage.clickOnCartButton();
        cartPage.elements.shoppingCartBreadcrumbs().should('have.text', 'Shopping Cart');
        cartPage.clickOnCheckoutButton();
        cartPage.clickRegLogButton();
        loginPage.createAccount();
        newUserDataPage.fillNewUserData();
        createdAccountPage.elements.accountMessage().should('have.text', 'Account Created!');
        createdAccountPage.clickContinue();
        loggedUserPage.elements.loggedUserName().should('have.text', ' Logged in as Tester');
        loggedUserPage.clickCartButton();
        cartPage.clickOnCheckoutButton();
        cartPage.checkDeliverAddress();
        cartPage.checkProductDetails();
        cartPage.addCommentToOrder();
        cartPage.clickOnPlaceOrderButton();
        paymentPage.fillCardData();
        paymentPage.confirmAndPay();
        paymentPage.elements.orderMessage().should('have.text', 'Congratulations! Your order has been confirmed!');
        loggedUserPage.deleteAccount();
    })
})