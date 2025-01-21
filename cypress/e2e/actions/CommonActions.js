export class CommonActions{
    enterValueInQaField(web_identifier, value) {
        cy.get(web_identifier).type(value);
    }

    verifyWebElementExist(web_identifier) {
        cy.get(web_identifier).should("be.visible");
    }

    clickButton(web_identifier) {
        cy.get(web_identifier).click()
    }

    verifyPathLocation(web_identifier) {
        cy.location("path").contains(web_identifier)
    }

    checkInputElement(web_identifier) {
        cy.get(web_identifier).check()
    }

    clickOnDropdownElement(dropdown_identifier, value) {
        cy.get(dropdown_identifier).select(value)
    }

}
