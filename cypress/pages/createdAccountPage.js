class createdAccountPage {

    elements = {
        accountMessage: () => cy.get('b'),
        continueButton: () => cy.get('[data-qa="continue-button"]'),
    }

    clickContinue() {
        this.elements.continueButton().click()
    }
}

export default new createdAccountPage();