import FillUserData from "../PageObject/FillUserData";
import UserData from "../PageObject/UserData"
import newUserData from "./pages/register_page";

describe('RegisterUser', ()=>
{
    it('RegisterUserTest', () =>
    {
        cy.visit('/')

        cy.title().should('eq','Automation Exercise');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

        cy.fixture('userdata').then((data) =>
        {
            const login =new UserData();
            login.verifyNewUserInfo();
            login.setUserName(data.username)
            login.setEmail(data.email)
            login.clickSignup();
        })

        cy.fixture('fillData').then((data) =>
        {

            const fill =new NewUserData();
            fill.verifyEnterAccountText();
            fill.checkGenderRadio();
            fill.setPassword(data.password)
            fill.setBirthDay(data.birthday)
            fill.setMonth(data.month)
            fill.setYear(data.year)
            fill.checkNewsletter();
            fill.checkOptin();
            fill.setFirstName(data.firstName)
            fill.setLastName(data.lastName)
            fill.setCompany(data.company)
            fill.setFirstAddress(data.firstAddress)
            fill.setSecondAddress(data.secondAddress)
            fill.setCountry(data.country);
            fill.setState(data.state)
            fill.setCity(data.city)
            fill.setZipcode(data.zipcode)
            fill.setMobileNumber(data.mobileNumber);
        })

        cy.get('[data-qa="create-account"]').click();
        cy.get('b').should('have.text','Account Created!');
        cy.get('[data-qa="continue-button"]').click();
        cy.get(':nth-child(10) > a').should('have.text', ' Logged in as Tester');
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
        cy.get('b').should('have.text','Account Deleted!');
        cy.get('[data-qa="continue-button"]').click();
    })
})