class loginPage {

    elements = {
        newUserText: () => cy.get('.signup-form > h2'),
        loginToAccountText: () => cy.get('.login-form > h2'),
        incorrectLoginMessage : () => cy.get('.login-form > form > p'),
        emailExistMessage: () => cy.get('.signup-form > form > p')
    }

    userNameInput = "[data-qa='signup-name']"

    emailInput = "[data-qa='signup-email']"

    signupButton = "[data-qa='signup-button']"

    newUserSignup = ".signup-form > h2"

    loginEmailInput = "[data-qa='login-email']"

    loginPasswordInput = "[data-qa='login-password']"

    loginButton = "[data-qa='login-button']"


    setUserName(username) {
        cy.get(this.userNameInput).type(username)
    }

    setEmail(email) {
        cy.get(this.emailInput).type(email)
    }

    signUpButton() {
        cy.get(this.signupButton).click()
    }

    loginCorrectEmail(email) {
        cy.get(this.loginEmailInput).type(email)
    }

    loginCorrectPassword(password) {
        cy.get(this.loginPasswordInput).type(password)
    }

    clickLoginButton() {
        cy.get(this.loginButton).click()
    }

    createAccount() {

        cy.fixture('userdata').then((data) => {
            const login = new loginPage();
            login.setUserName(data.username)
            login.setEmail(data.email)
            login.signUpButton()
        })

    }

    correctloginToAccount() {

        cy.fixture('userdata').then((data) => {
            const login = new loginPage();
            login.loginCorrectEmail(data.email)
            login.loginCorrectPassword(data.password)
        })
    }

    incorrectLoginToAccount() {
        cy.get(this.loginEmailInput).type('visit@test.tt')
        cy.get(this.loginPasswordInput).type('password')
    }
}

export default new loginPage();