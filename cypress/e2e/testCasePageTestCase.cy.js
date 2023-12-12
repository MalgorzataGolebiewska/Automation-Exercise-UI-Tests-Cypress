import homePage from "../pages/homePage"
import testCasePage from "../pages/testCasePage"

describe('Verify Test Case Page', () => {

    it('Should be navigated to test case page', () =>
    {
        homePage.visitHomePage();
        homePage.elements.centerText().should('have.text', 'Features Items');
        homePage.clickOnTestCaseButton();
        testCasePage.elements.testCaseHeader().should('have.text','Test Cases');
    })
})