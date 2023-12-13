import homePage from "../pages/homePage";
import productsPage from "../pages/productsPage";

describe('Search product Test Case', () => {

    it('Should search product', () => {
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnProductsButton();
        productsPage.elements.productsHeader().should('have.text', 'All Products');
        productsPage.searchProduct();
        productsPage.searchResult()
    })
})