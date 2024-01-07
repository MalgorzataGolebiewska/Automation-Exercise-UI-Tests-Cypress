class loggedUserPage {

    elements = {
        loggedUserName: () => cy.get(':nth-child(10) > a'),
        deleteButton: () => cy.get('.shop-menu > .nav > :nth-child(5) > a'),
        logoutButton: () => cy.get('.shop-menu > .nav > :nth-child(4) > a'),
        cartButton: () => cy.get('.shop-menu > .nav > :nth-child(3) > a'),
    }

    deleteAccount() {
        this.elements.deleteButton().click()
    }

    logoutUser() {
        this.elements.logoutButton().click()
    }

    clickCartButton() {
        this.elements.cartButton().click()
    }

}

export default new loggedUserPage();