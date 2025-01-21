import { CommonActions } from "./actions/CommonActions";
import { LoginPage } from "./pages/LoginPage";
import { Homepage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";

const loginpage = new LoginPage();
const homepage = new Homepage();
const registration = new RegisterPage();
const ca = new CommonActions();

describe("Register User", () => {
    let identifiers_to_check = [registration.gender_field_identifier, registration.newsletter_field_identifier, registration.optin_field_identifier]

    beforeEach(() => {
        cy.fixture("user/user.json").then((user) => {
            cy.wrap(user).as("userData");
        })
    })

    it("registers a new user", () => {
        cy.get('@userData').then((userData) => {
            cy.visit("https://automationexercise.com/")
            homepage.pageLogoIsVisible()
            
            cy.get("[href='/login']").contains("Signup / Login").click()
            cy.location("pathname").should("eq", "/login")
            loginpage.enterSignupUsername(userData.name)
            loginpage.enterSignupEmail(userData.email)
            loginpage.clickSignupButton()

            registration.verifyRegistrationPageIsOpen()

            // Loops through all input identifiers for check buttons and checks them
            identifiers_to_check.forEach((identifier) => {
                ca.checkInputElement(identifier)
            })

            cy.getByQa("days").select("16")
            cy.getByQa("years").select("1998")
            cy.getByQa("country").select("United States")
            registration.enterPassword(userData.password)
            registration.enterFirstName(userData.first_name)
            registration.enterLastName(userData.last_name)
            registration.enterAddress(userData.address)
            registration.enterCompany(userData.company)
            registration.enterCity(userData.city)
            registration.enterZipcode(userData.zipcode)
            registration.enterMobilenumber(userData.mobile_number)
            registration.enterState(userData.state)
            registration.clickCreateAccountButton()

            ca.verifyWebElementExist(registration.continue_button_account_created_identifier)
            registration.clickOnContinueButton()

            // cy.location("pathname").contains("/")
            // cy.get('.shop-menu > .nav > :nth-child(5) > a')
            cy.get(":nth-child(10) > a").contains(/logged in as/i)
        })
    })
})

