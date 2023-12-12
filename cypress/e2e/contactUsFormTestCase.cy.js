import homePage from "../pages/homePage";
import contactUsPage from "../pages/contactUsPage";

describe('Contact Us Form Test Case',() => {

    it('Should pass through the Contact US Form', () =>
    {
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnContactUsButton();
        contactUsPage.elements.getInTouchMessage().should('have.text','Get In Touch');
        contactUsPage.fillContactUsForm();
        contactUsPage.uploadFile();
        contactUsPage.clickSubmitButton();
        contactUsPage.elements.submittedMessage().should('have.text','Success! Your details have been submitted successfully.');
        contactUsPage.clickHomeButton();
        homePage.elements.centerText().should('have.text', 'Features Items');
    })
})