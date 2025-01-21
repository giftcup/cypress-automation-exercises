import { CommonActions } from "../actions/CommonActions"

const ca = new CommonActions();

export class LoginPage {
    // Web elements for login page
    login_username_identifier = "[data-qa='login-email']" 
    login_password_identifier = "[data-qa='login-password']"
    login_button_identifier = "[data-qa='login-button']"

    signup_username_identifier = "[data-qa='signup-name']"
    signup_email_identifier = "[data-qa='signup-email']"
    signup_button_identifier = "[data-qa='signup-button']"

    // Action Methods for Login Page

    enterLoginUsername(value) {
        ca.enterValueInQaField(this.login_username_identifier, value)
    }

    enterLoginPassword(value) {
        ca.enterValueInQaField(this.login_password_identifier, value)
    }

    enterSignupUsername(value) {
        ca.enterValueInQaField(this.signup_username_identifier, value)
    }

    enterSignupEmail(value) {
        ca.enterValueInQaField(this.signup_email_identifier, value)
    }

    clickLoginButton() {
        ca.clickButton(this.login_button_identifier)    
    }

    clickSignupButton() {
        ca.clickButton(this.signup_button_identifier)
    }

    
}