
class newUserDataPage {

    elements = {
        accountInformationText: () => cy.get(':nth-child(1) > b')
    }

    enterAccountTxt = ":nth-child(1) > b";
    genderRadio = "#id_gender2";
    passwordInput = "[data-qa='password']";
    daySelect = "[data-qa='days']";
    monthSelect = "[data-qa='months']";
    yearSelect = "[data-qa='years']";
    newsletterCheckbox = "#newsletter";
    optinCheckbox = "#optin";
    firstnameInput = "[data-qa='first_name']";
    lastnameInput = "[data-qa='last_name']";
    companyInput = "#company";
    firstAddressInput = "[data-qa='address']";
    secondAddressInput = "[data-qa='address2']";
    countrySelect = "#country";
    stateInput = "[data-qa='state']";
    cityInput = "[data-qa='city']";
    zipcodeInput = "[data-qa='zipcode']";
    mobileNumberInput = "[data-qa='mobile_number']";
    createAccountButton = "[data-qa='create-account']";

    verifyEnterAccountText() {
        cy.get(this.enterAccountTxt).should('have.text', 'Enter Account Information');
    }

    checkGenderRadio() {
        cy.get(this.genderRadio)
            .check()
            .should('be.checked');
    }

    setPassword(password) {
        cy.get(this.passwordInput)
            .type(password);
    }

    setBirthDay(birthday) {
        cy.get(this.daySelect)
            .select(birthday, { forced: true })
            .should('have.value', birthday);
    }

    setMonth(month) {
        cy.get(this.monthSelect)
            .select(month, { forced: true })
            .should('have.value', month);

    }

    setYear(year) {
        cy.get(this.yearSelect)
            .wait(5000)
            .select(year, { forced: true })
            .should('have.value', year);
    }

    checkNewsletter() {
        cy.get(this.newsletterCheckbox)
            .check()
            .should('be.checked');
    }

    checkOptin() {
        cy.get(this.optinCheckbox)
            .check()
            .should('be.checked');
    }

    setFirstName(firstName) {
        cy.get(this.firstnameInput)
            .type(firstName);
    }

    setLastName(lastName) {
        cy.get(this.lastnameInput)
            .type(lastName);
    }

    setCompany(company) {
        cy.get(this.companyInput)
            .wait(5000)
            .type(company);
    }

    setFirstAddress(firstAddress) {
        cy.get(this.firstAddressInput)
            .type(firstAddress);
    }

    setSecondAddress(secondAddress) {
        cy.get(this.secondAddressInput)
            .type(secondAddress);
    }

    setCountry(country) {
        cy.get(this.countrySelect)
            .select(country, { forced: true })
            .should('have.value', country);
    }

    setState(state) {
        cy.get(this.stateInput)
            .type(state);
    }

    setCity(city) {
        cy.get(this.cityInput)
            .type(city);
    }

    setZipcode(zipcode) {
        cy.get(this.zipcodeInput)
            .type(zipcode);
    }

    setMobileNumber(mobileNumber) {
        cy.get(this.mobileNumberInput)
            .type(mobileNumber);
    }

    clickButton() {
        cy.get(this.createAccountButton)
            .click();
    }

    fillNewUserData() {
        cy.fixture('fillData').then((data) => {

            const user = new newUserDataPage();
            user.checkGenderRadio();
            user.setPassword(data.password)
            user.setBirthDay(data.birthday)
            user.setMonth(data.month)
            user.setYear(data.year)
            user.checkNewsletter();
            user.checkOptin();
            user.setFirstName(data.firstName)
            user.setLastName(data.lastName)
            user.setCompany(data.company)
            user.setFirstAddress(data.firstAddress)
            user.setSecondAddress(data.secondAddress)
            user.setCountry(data.country);
            user.setState(data.state)
            user.setCity(data.city)
            user.setZipcode(data.zipcode)
            user.setMobileNumber(data.mobileNumber)
            user.clickButton();
        })
    }
}

export default new newUserDataPage();
require('cypress-xpath')