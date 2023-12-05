import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import newUserPage from "../pages/newUserPage";
import createdAccountPage from "../pages/createdAccountPage";
import loggedUserPage from "../pages/loggedUserPage";
import deleteAccountPage from "../pages/deleteAccountPage";


describe('RegisterUserTest', () => {

    it('Should register new user and delete account', () => {
        cy.visit('/')

        cy.wait(3000);
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnLoginButton();
        loginPage.elements.newUserText().should('have.text', 'New User Signup!');
        loginPage.createAccount();
        newUserPage.elements.accountInformationText().should('have.text', 'Enter Account Information');
        newUserPage.fillNewUserData();
        createdAccountPage.elements.accountMessage().should('have.text', 'Account Created!');
        createdAccountPage.clickContinue();
        loggedUserPage.elements.loggedUserName().should('have.text', ' Logged in as Tester');
        loggedUserPage.deleteAccount();
        deleteAccountPage.elements.accountDeletedMessage().should('have.text', 'Account Deleted!');
        deleteAccountPage.continueButton();
        homePage.elements.centerText().should('have.text', 'Features Items');

    })
})