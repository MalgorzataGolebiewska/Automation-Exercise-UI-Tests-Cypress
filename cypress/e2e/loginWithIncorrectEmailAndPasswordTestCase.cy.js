import homePage from "../pages/homePage"
import loginPage from "../pages/loginPage";

describe('Login with incorrect email and password', () => {

    it('Should not login with incorrect email and password', () => {
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnLoginButton();
        loginPage.elements.loginToAccountText().should('have.text', 'Login to your account');
        loginPage.incorrectLoginToAccount();
        loginPage.clickLoginButton();
        loginPage.elements.incorrectLoginMessage().should('have.text', 'Your email or password is incorrect!');
    })
})