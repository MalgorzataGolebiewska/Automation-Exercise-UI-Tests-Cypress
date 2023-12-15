class viewProductPage {

    elements = {
        productInformation: () => cy.get('.product-information > h2'),
        productQuantity: () => cy.get('#quantity'),
        addToCartButton: () => cy.get(':nth-child(5) > .btn'),
        viewCartButton: () => cy.get('u'),
    }

    changeQuantity() {
        this.elements.productQuantity().clear().type(4)
    }
    addToCart() {
        this.elements.addToCartButton().click()
    }
    viewCart() {
        this.elements.viewCartButton().click()
    }
}

export default new viewProductPage();