class cartPage {

    elements = {
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
        secondTotalTD: () => cy.get('#product-2 > .cart_total > .cart_total_price'),
        shoppingCartBreadcrumbs: () => cy.get('.active'),
        proceedToCheckoutButton: () => cy.get('.col-sm-6 > .btn'),
        registerLoginButton: () => cy.get('.modal-body > :nth-child(2) > a > u'),
        firstAddress: () => cy.get('#address_delivery > :nth-child(4)'),
        secondAddress: () => cy.get('#address_delivery > :nth-child(5)'),
        cityStateZipcode: () => cy.get('#address_delivery > .address_city'),
        countryName: () => cy.get('#address_delivery > .address_country_name'),
        productName: () => cy.get('h4 > a'),
        productPrice: () => cy.get('.cart_price > p'),
        productQuantity: () => cy.get('.disabled'),
        totalPrice: () => cy.get('.cart_total > .cart_total_price'),
        commentAreaInput: () => cy.get('.form-control'),
        placeOrderButton: () => cy.get(':nth-child(7) > .btn'),
    }

    subscriptionInput = "#susbscribe_email"
    addressDetails = "#address_delivery"

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

    clickOnCheckoutButton() {
        this.elements.proceedToCheckoutButton().click()
    }

    clickRegLogButton() {
        this.elements.registerLoginButton().click()
    }

    checkDeliverAddress() {
        cy.get(this.addressDetails)
            .should('contain.text', 'Newcrest')
            .should('contain.text', 'Forgotten Hollow')
    }

    checkProductDetails() {
        this.elements.productName().should('have.text', 'Blue Top');
        this.elements.productPrice().should('have.text', 'Rs. 500');
        this.elements.productQuantity().should('have.text', '1');
        this.elements.totalPrice().should('have.text', 'Rs. 500');
    }

    addCommentToOrder() {
        this.elements.commentAreaInput().type('This is my test comment')
    }

    clickOnPlaceOrderButton() {
        this.elements.placeOrderButton().click()
    }
}

export default new cartPage();
