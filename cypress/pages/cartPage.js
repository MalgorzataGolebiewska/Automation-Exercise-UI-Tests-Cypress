class cartPage {

    elements={
        subscriptionText: () => cy.get('h2'),
        subscribeButton: () => cy.get('#subscribe'),
        subscriptionMessage: () => cy.get('#success-subscribe > div'),
        firstProduct: () => cy.get('#product-1 > .cart_description > h4 > a'),
        secondProduct: () => cy.get('#product-2 > .cart_description > h4 > a'),
        firstPriceTD: () => cy.get('#product-1 > .cart_price > p'),
        secondPriceTD: () => cy.get('#product-2 > .cart_price > p'),
        firstQuantityTD: () => cy.get('#product-1 > .cart_quantity > .disabled'),
        secondQuantityTD: () => cy.get('#product-2 > .cart_quantity > .disabled'),
        firstTotalTD: () => cy.get('#product-1 > .cart_total > .cart_total_price'),
        secondTotalTD: () => cy.get('#product-2 > .cart_total > .cart_total_price')
    }
 
    subscriptionInput="#susbscribe_email"

    subscriptionEmail(email) {
        cy.get(this.subscriptionInput).type(email)
    }

    getSubscription() {
        cy.fixture('userdata').then((data) => {
            const subs = new cartPage();
            subs.subscriptionEmail(data.email)
        })
        this.elements.subscribeButton().click()
    }
}

export default new cartPage();
