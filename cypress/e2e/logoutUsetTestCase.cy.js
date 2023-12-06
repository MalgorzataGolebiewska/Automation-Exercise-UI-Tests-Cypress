import homePage from "../pages/homePage"
import loggedUserPage from "../pages/loggedUserPage";
import loginPage from "../pages/loginPage";
import newUserDataPage from "../pages/newUserDataPage";
import createdAccountPage from "../pages/createdAccountPage";

describe('Logout user', () => {

    after(() =>{
        cy.deleteUser();
    })

    it('Should logout user to login page', () => {

        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnLoginButton();
        loginPage.createAccount();
        newUserDataPage.fillNewUserData();
        createdAccountPage.clickContinue();
        loggedUserPage.logoutUser();
        loginPage.elements.loginToAccountText().should('have.text','Login to your account');
        loginPage.correctloginToAccount();
        loginPage.clickLoginButton();
        loggedUserPage.elements.loggedUserName().should('have.text', ' Logged in as Tester');
        loggedUserPage.logoutUser();
        loginPage.elements.loginToAccountText().should('have.text','Login to your account');
        
    })
})