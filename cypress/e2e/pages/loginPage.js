class loginPage{


        userNameInput ="[data-qa='signup-name']"

        emailInput = "[data-qa='signup-email']"

        signupButton = "[data-qa='signup-button']"

        newUserSignup = ".signup-form > h2"
   
    

    setUserName(username)
        {
            cy.get(this.userNameInput).type(username)
        }
    
    setEmail(email)
        {
            cy.get(this.emailInput).type(email)
        }

    signUpButton()
    {
        cy.get(this.signupButton).click()
    }
    

    createAccount(){

        cy.fixture('userdata').then((data) =>
        {
            const login =new loginPage();
            login.setUserName(data.username)
            login.setEmail(data.email)
            login.signUpButton()
        })
        

    }
}

export default new loginPage();