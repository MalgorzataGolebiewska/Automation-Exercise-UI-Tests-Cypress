class homePage{


    elements={
        centerText : () => cy.xpath("//div[@class='features_items']/h2"),
        loginButton : () => cy.get(".shop-menu > .nav > :nth-child(4) > a")
    }


    

    clickOnLoginButton(){

        this.elements.loginButton().click()
    }
}

export default new homePage();

require('cypress-xpath')