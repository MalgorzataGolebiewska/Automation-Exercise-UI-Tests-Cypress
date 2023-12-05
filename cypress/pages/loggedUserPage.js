class loggedUserPage {

    elements = {
        loggedUserName: () => cy.get(':nth-child(10) > a'),
        deleteButton: () => cy.get('.shop-menu > .nav > :nth-child(5) > a')
    }

    deleteAccount() {
        this.elements.deleteButton().click()
    }

}

export default new loggedUserPage();