import homePage from "../pages/homePage"
import productsPage from "../pages/productsPage"

describe('Verify All Products and product detail page Test Case', () =>{
    it('All products and one product detail should be visible', () =>{
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnProductsButton();
        productsPage.elements.productsHeader().should('have.text','All Products');
        productsPage.elements.products().should('satisfy', Cypress.dom.isVisible);
        productsPage.clickFirstProduct();
        productsPage.verifyFirstProductDetail();
    })
})