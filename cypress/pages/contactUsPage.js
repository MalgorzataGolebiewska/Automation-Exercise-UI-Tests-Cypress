class contactUsPage{

    elements={
        getInTouchMessage : () => cy.get('div.contact-form > .title'),
        submittedMessage : () => cy.get('.status')
    }

    nameInput="[data-qa='name']"
    emailInput="[data-qa='email']"
    subjectInput="[data-qa='subject']"
    messageInput="[data-qa='message']"
    ulopadFileButton=":nth-child(6) > .form-control"
    submitButton="[data-qa='submit-button']"
    homeButton="#form-section > .btn"

    setName(username) {
        cy.get(this.nameInput).type(username)
    }

    setEmail(email) {
        cy.get(this.emailInput).type(email)
    }

    setSubject(subject) {
        cy.get(this.subjectInput).type(subject)
    }

    setMessage(){
        cy.get(this.messageInput).type(MessageText())
            function MessageText() {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

                 for (var i = 0; i < 100; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
        
            }
        } 

        fillContactUsForm(){
            cy.fixture('userdata').then((data) => {
                const contact = new contactUsPage();
                contact.setName(data.username)
                contact.setEmail(data.email)
                contact.setSubject(data.subject)
                contact.setMessage()
            })
        }

        uploadFile(){
            cy.get(this.ulopadFileButton).selectFile('cypress/fixtures/intj.png')
        }

        clickSubmitButton(){
            cy.get(this.submitButton).click()
        }

        clickHomeButton(){
            cy.get(this.homeButton).click()
        }
    }
export default new contactUsPage();