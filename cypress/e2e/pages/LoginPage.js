export class LoginPage {
    // Web elements for login page
    login_username_field_identifier = "login-email" //qa
    login_password_field_identifier = "login-password"
    login_button_identifier = "login-button"

    signup_username_field_identifier = "signup-name"
    signup_email_field_identifier = "signup-email"
    signup_button_identifier = "signup-button"

    // Action Methods for Login Page

    enterUsername(value) {
        cy.getByQa(this.login_username_field_identifier).type(value)
    }

}