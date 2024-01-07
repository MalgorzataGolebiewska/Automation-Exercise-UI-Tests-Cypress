class homePage {

    elements = {
        centerText: () => cy.xpath("//div[@class='features_items']/h2"),
        loginButton: () => cy.get(".shop-menu > .nav > :nth-child(4) > a"),
        contactUsButton: () => cy.get('.shop-menu > .nav > :nth-child(8) > a'),
        testCaseButton: () => cy.get('.shop-menu > .nav > :nth-child(5) > a'),
        productsButton: () => cy.get('.shop-menu > .nav > :nth-child(2) > a'),
        subscriptionText: () => cy.get('.single-widget > h2'),
        subscriptionButton: () => cy.get('#subscribe'),
        subscriptionMessage: () => cy.get('#success-subscribe > div'),
        cartButton: () => cy.get('.shop-menu > .nav > :nth-child(3) > a'),
        viewProductButton: () => cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a'),
        blueTopToCartButton: () => cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'),
        continueShoppingButton: () => cy.get('.modal-footer > .btn'),
    }

    subscriptionInput = "#susbscribe_email"

    visitHomePage() {

        cy.visit('/');
        cy.wait(3000)
    }

    clickOnLoginButton() {

        this.elements.loginButton().click()
    }

    clickOnContactUsButton() {
        this.elements.contactUsButton().click()
    }

    clickOnTestCaseButton() {
        this.elements.testCaseButton().click()
    }

    clickOnProductsButton() {
        this.elements.productsButton().click()
    }

    scrollDown() {
        this.elements.subscriptionText().scrollIntoView()
    }

    subscriptionEmail(email) {
        cy.get(this.subscriptionInput).type(email)
    }

    getSubscription() {
        cy.fixture('userdata').then((data) => {
            const subs = new homePage();
            subs.subscriptionEmail(data.email)
        })
        this.elements.subscriptionButton().click()
    }

    clickOnCartButton(){
        this.elements.cartButton().click()
    }

    clickOnViewProduct(){
        this.elements.viewProductButton().click()
    }

    clickOnBlueTopCartButton(){
        this.elements.blueTopToCartButton().click()
    }

    clickOnContinueShopping(){
        this.elements.continueShoppingButton().click()
    }
}

export default new homePage();

require('cypress-xpath')

