class homePage {

    elements = {
        centerText : () => cy.xpath("//div[@class='features_items']/h2"),
        loginButton : () => cy.get(".shop-menu > .nav > :nth-child(4) > a"),
        contactUsButton : () => cy.get('.shop-menu > .nav > :nth-child(8) > a'),
        testCaseButton : () => cy.get('.shop-menu > .nav > :nth-child(5) > a')
    }

    visitHomePage(){
        
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
}

export default new homePage();

require('cypress-xpath')