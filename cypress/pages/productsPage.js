import { should } from 'chai'

class productsPage {

    elements = {
        productsHeader: () => cy.get('.title'),
        allProducts: () => cy.get('.shop-menu > .nav > :nth-child(2)'),
        products: () => cy.xpath("//div[@class='features_items']/div[@class='col-sm-4']"),
        firstProduct: () => cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a'),
        searchButton: () => cy.get('#submit_search'),
        searchedProductsHeader: () => cy.get('.title'),
    }

    productName = ".product-information > h2"
    category = ".product-information > :nth-child(3)"
    price = ":nth-child(5) > span"
    availability = ".product-information > :nth-child(6)"
    condition = ".product-information > :nth-child(7)"
    brand = ".product-information > :nth-child(8)"
    searchInput = "#search_product"
    visibilityProducts = '.productinfo > p'

    clickFirstProduct() {
        this.elements.firstProduct().click()
    }

    verifyFirstProductDetail() {
        cy.get(this.productName).invoke('text').then((text) => {
            expect(text.trim()).equal('Blue Top')
        });
        cy.get(this.category).invoke('text').then((text) => {
            expect(text.trim()).equal('Category: Women > Tops')
        });
        cy.get(this.price).invoke('text').then((text) => {
            expect(text.trim()).equal('Rs. 500')
        });
        cy.get(this.availability).invoke('text').then((text) => {
            expect(text.trim()).equal('Availability: In Stock')
        });
        cy.get(this.condition).invoke('text').then((text) => {
            expect(text.trim()).equal('Condition: New')
        });
        cy.get(this.brand).invoke('text').then((text) => {
            expect(text.trim()).equal('Brand: Polo')
        });
    }

    typeProductName(product) {
        cy.get(this.searchInput).type(product)
    }

    searchProduct() {
        cy.fixture('products').then((data) => {
            const prod = new productsPage();
            prod.typeProductName(data.searchProduct)
        })
        this.elements.searchButton().click()
    }

    productNameResult(product) {
        cy.get(this.visibilityProducts).should('contain.text', product)
    }

    searchResult() {
        cy.fixture('products').then((data) => {
            const result = new productsPage();
            result.productNameResult(data.searchProduct)
        })
    }
}
export default new productsPage();
require('cypress-xpath')

