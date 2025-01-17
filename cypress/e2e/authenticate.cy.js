describe("Register User", () => {

    beforeEach(() => {
        cy.fixture("user/user.json").then((user) => {
            cy.wrap(user).as("userData");
        })
    })

    it("registers a new user", () => {
        cy.get('@userData').then((userData) => {
            cy.visit("https://automationexercise.com/")
        cy.get("[href='/login']").contains("Signup / Login").click()
        
        cy.location("pathname").should("eq", "/login")
        cy.getByQa("signup-name").type(userData.name)
        cy.getByQa("signup-email").type("jonahson@rmail.cm")
        cy.getByQa("signup-button").click()

        cy.location("pathname").should("eq", "/signup")
        cy.get("h2.title b").eq(0).contains(/enter account information/i)
        cy.get("#id_gender2").check()
        cy.getByQa("password").type("pass1234")
        cy.getByQa("days").select("16")
        cy.getByQa("years").select("1998")
        cy.get("#newsletter").check()
        cy.get("#optin").check()
        cy.getByQa("first_name").type("Agbor")
        cy.getByQa("last_name").type("Jonahson")
        cy.getByQa("address").type("San Fransisco")
        cy.getByQa("country").select("United States")
        cy.getByQa("state").type("California")
        cy.getByQa("city").type("Mountain View")
        cy.getByQa("zipcode").type("00000")
        cy.getByQa("mobile_number").type("+1 2994 2985 4920")
        cy.getByQa("create-account").click()

        cy.location("pathname").should("eq", "/account_created")
        cy.getByQa("account-created").contains("Account Created")
        cy.getByQa("continue-button").contains("Continue").click()

        cy.location("pathname").contains("/")
        cy.get("li a").contains(/logged in as/i)
        })
    })
})

