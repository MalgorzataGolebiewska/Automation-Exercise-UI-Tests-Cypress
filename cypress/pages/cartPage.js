class cartPage {

    elements={
        subscriptionText: () => cy.get('h2'),
        subscribeButton: () => cy.get('#subscribe'),
        subscriptionMessage: () => cy.get('#success-subscribe > div'),
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