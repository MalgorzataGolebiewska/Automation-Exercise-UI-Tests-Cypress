import homePage from "../pages/homePage"
import allProductsPage from "../pages/allProductsPage"

describe('Verify All Products and product detail page Test Case', () =>{
    it('All products and one product detail should be visible', () =>{
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnProductsButton();
        allProductsPage.elements.productsHeader().should('have.text','All Products');
        allProductsPage.elements.products().should('satisfy', Cypress.dom.isVisible);
        allProductsPage.clickFirstProduct();
        allProductsPage.verifyProductsDetail();
    })
})