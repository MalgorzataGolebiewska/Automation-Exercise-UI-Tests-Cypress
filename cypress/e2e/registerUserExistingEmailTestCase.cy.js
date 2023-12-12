import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";

describe('Register user with existing email', () => {

    before(() => {
        cy.createUser();
    })
    after(() => {
        cy.deleteUser();
    })

    it('Should not be possible to create a new account with existing email', () => {
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnLoginButton();
        loginPage.elements.newUserText().should('have.text', 'New User Signup!');
        loginPage.createAccount();
        loginPage.elements.emailExistMessage().should('have.text', 'Email Address already exist!')
    })
})