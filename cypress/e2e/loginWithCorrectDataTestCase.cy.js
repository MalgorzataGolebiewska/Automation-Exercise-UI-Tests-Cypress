import homePage from "../pages/homePage"
import loggedUserPage from "../pages/loggedUserPage";
import loginPage from "../pages/loginPage";
import newUserDataPage from "../pages/newUserDataPage";
import createdAccountPage from "../pages/createdAccountPage";
import deleteAccountPage from "../pages/deleteAccountPage";


describe('Login User With Correct Data Test Case', () => {

    it('Should login with correct email and password, and delete account', () => {
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnLoginButton();
        loginPage.createAccount();
        newUserDataPage.fillNewUserData();
        createdAccountPage.clickContinue();
        loggedUserPage.logoutUser();
        loginPage.elements.loginToAccountText().should('have.text', 'Login to your account');
        loginPage.correctloginToAccount();
        loginPage.clickLoginButton();
        loggedUserPage.elements.loggedUserName().should('have.text', ' Logged in as Tester');
        loggedUserPage.deleteAccount();
        deleteAccountPage.elements.accountDeletedMessage().should('have.text', 'Account Deleted!');
    })
})