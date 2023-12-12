class allProductsPage {

    elements = {
        productsHeader: () => cy.get('.title'),
        allProducts: () => cy.get('.shop-menu > .nav > :nth-child(2)'),
        products: () => cy.xpath("//div[@class='features_items']/div[@class='col-sm-4']"),
        firstProduct: () => cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a'),
    }

    productName=".product-information > h2"
    category=".product-information > :nth-child(3)"
    price=":nth-child(5) > span"
    availability=".product-information > :nth-child(6)"
    condition=".product-information > :nth-child(7)"
    brand=".product-information > :nth-child(8)"

    clickFirstProduct(){
        this.elements.firstProduct().click()
    }

    checkProductName(productName){
        cy.get(this.productName).should('have.text',productName)
    }

    checkCategory(category){
        cy.get(this.category).should('have.text',category)
    }

    checkPrice(price){
        cy.get(this.price).should('have.text',price)
    }

    checkAvailability(availability){
        cy.get(this.availability).should('have.text',availability)
    }

    checkCondition(condition){
        cy.get(this.condition).should('have.text',condition)
    }

    checkBrand(brand){
        cy.get(this.brand).should('have.text',brand)
    }

    verifyProductsDetail(){
        cy.fixture('products').then((data) => {
            const prod = new allProductsPage();
            prod.checkProductName(data.productName);
            prod.checkCategory(data.category);
            prod.checkPrice(data.price);
            prod.checkAvailability(data.availability);
            prod.checkCondition(data.condition);
            prod.checkBrand(data.brand)
        })
    }
}
export default new allProductsPage();
require('cypress-xpath')

