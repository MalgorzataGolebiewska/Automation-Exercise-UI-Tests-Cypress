
class UserData
{
    userNameInput="[data-qa='signup-name']";
    emailInput="[data-qa='signup-email']";
    signuptButton="[data-qa='signup-button']";
    newUserSignup=".signup-form > h2";

    verifyNewUserInfo()
    {
        cy.get(this.newUserSignup).should('have.text','New User Signup!');
    }

    setUserName(username)
    {
        cy.get(this.userNameInput).type(username);
    }

    setEmail(email)
    {
        cy.get(this.emailInput).type(email);
    }

    clickSignup()
    {
        cy.get(this.signuptButton).click();
    }

}

export default UserData;