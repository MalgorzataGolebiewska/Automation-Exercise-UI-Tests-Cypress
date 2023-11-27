import homePage from "./pages/homePage";
import loginPage from "./pages/loginPage";


describe('RegisterUser', ()=>
{
it('nannana', () => {
    cy.visit('/')
 
    cy.wait(3000);
    homePage.elements.centerText().should('have.text','Features Items');
    homePage.clickOnLoginButton();
    loginPage.createAccount();

}
)

})