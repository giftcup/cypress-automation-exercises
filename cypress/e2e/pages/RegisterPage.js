import { CommonActions } from "../actions/CommonActions";

const ca = new CommonActions();

export class RegisterPage {
    registration_page_url_identifier = "/signup"
    registration_page_header_identifier = ":nth-child(1) > b"
    gender_field_identifier = "#id_gender2"
    password_field_identifier = "[data-qa='password']"
    newsletter_field_identifier = "#newsletter"
    optin_field_identifier = "#optin"
    firstname_field_identifier = "[data-qa='first_name']"
    lastname_field_identifier = "[data-qa='last_name']"
    company_field_identifier = "[data-qa='company']"
    address_field_identifier = "[data-qa='address']"
    state_field_identifier = "[data-qa='state']"
    city_field_identifier = "[data-qa='city']"
    zipcode_field_identifier = "[data-qa='zipcode']"
    mobilenumber_field_identifier = "[data-qa='mobile_number']"
    create_account_button_identifier = "[data-qa='create-account']"
    account_created_identifier = "account-created"
    continue_button_account_created_identifier = "[data-qa='continue-button']"
    day_dob_identifier = "[data-qa='days']"
    month_dob_identifier = "[data-qa='months']"
    year_dob_identifier = "[data-qa='years']"
    country_identifier = "[data-qa='days']"


    verifyRegistrationPageUrl(){
        ca.verifyPathLocation(this.registration_page_url_identifier)
    }

    verifyRegistrationPageIsOpen() {
        ca.verifyWebElementExist(this.registration_page_header_identifier)
    }
    
    enterPassword(value) {
        ca.enterValueInQaField(this.password_field_identifier, value)
    }

    enterFirstName(value) {
        ca.enterValueInQaField(this.firstname_field_identifier, value)
    }

    enterLastName(value) {
        ca.enterValueInQaField(this.lastname_field_identifier, value)
    }

    enterCompany(value) {
        ca.enterValueInQaField(this.company_field_identifier, value)
    }

    enterAddress(value) {
        ca.enterValueInQaField(this.address_field_identifier, value)
    }

    enterState(value) {
        ca.enterValueInQaField(this.state_field_identifier, value)
    }

    enterCity(value) {
        ca.enterValueInQaField(this.city_field_identifier, value)
    }

    enterZipcode(value) {
        ca.enterValueInQaField(this.zipcode_field_identifier, value)
    }

    enterMobilenumber(value) {
        ca.enterValueInQaField(this.mobilenumber_field_identifier, value)
    }

    clickCreateAccountButton() {
        ca.clickButton(this.create_account_button_identifier)
    }
    
    clickOnContinueButton() {
        ca.clickButton(this.continue_button_account_created_identifier)
    }
}