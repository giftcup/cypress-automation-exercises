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
            cy.getByQa("signup-email").type(userData.email)
            cy.getByQa("signup-button").click()

            cy.location("pathname").should("eq", "/signup")
            cy.get("h2.title b").eq(0).contains(/enter account information/i)
            cy.get("#id_gender2").check()
            cy.getByQa("password").type(userData.password)
            cy.getByQa("days").select("16")
            cy.getByQa("years").select("1998")
            cy.get("#newsletter").check()
            cy.get("#optin").check()
            cy.getByQa("first_name").type(userData.first_name)
            cy.getByQa("last_name").type(userData.last_name)
            cy.getByQa("company").type(userData.company)
            cy.getByQa("address").type(userData.address)
            cy.getByQa("country").select("United States")
            cy.getByQa("state").type(userData.state)
            cy.getByQa("city").type(userData.city)
            cy.getByQa("zipcode").type(userData.zipcode)
            cy.getByQa("mobile_number").type(userData.mobile_number)
            cy.getByQa("create-account").click()

            cy.location("pathname").should("eq", "/account_created")
            cy.getByQa("account-created").contains("Account Created")
            cy.getByQa("continue-button").contains("Continue").click()

            cy.location("pathname").contains("/")
            cy.get("li a").contains(/logged in as/i)
        })
    })
})

