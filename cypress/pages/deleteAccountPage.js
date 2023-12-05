class deleteAccountPage {

    elements = {
        accountDeletedMessage: () => cy.get('b'),
        deleteContinueButton: () => cy.get('[data-qa="continue-button"]')
    }

    continueButton() {
        this.elements.deleteContinueButton().click()
    }
}

export default new deleteAccountPage();