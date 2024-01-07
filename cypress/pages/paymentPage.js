class paymentPage {

    elements = {
        nameOnCardInput: () => cy.get('[data-qa="name-on-card"]'),
        cardNumberInput: () => cy.get('[data-qa="card-number"]'),
        cvcInput: () => cy.get('[data-qa="cvc"]'),
        expiryMonthInput: () => cy.get('[data-qa="expiry-month"]'),
        expiryYearInput: () => cy.get('[data-qa="expiry-year"]'),
        payButton: () => cy.get('[data-qa="pay-button"]'),
        orderMessage: () => cy.get('.col-sm-9 > p')
    }

    fillCardData() {
        this.elements.nameOnCardInput().type('Tester');
        this.elements.cardNumberInput().type('123456789');
        this.elements.cvcInput().type('123');
        this.elements.expiryMonthInput().type('05');
        this.elements.expiryYearInput().type('2028')
    }

    confirmAndPay() {
        this.elements.payButton().click()
    }

}
export default new paymentPage()