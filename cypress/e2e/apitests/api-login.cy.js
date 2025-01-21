const url = "https://automationexercise.com/api/verifyLogin"

describe("API tests for login endpoints", () => {
    beforeEach(() => {
        cy.fixture("user/user.json").then((user) => {
            cy.wrap(user).as("userData")
        })
    })

    it("POST to verify login with valid credentials", () => {
        cy.get('@userData').then((userData) => {
            cy.request({
                method: "POST",
                url: url,
                form: true,
                body: {
                    email: userData.email,
                    password: userData.password
                }
            })
        }).then((response) => {
            console.log(response.body)
            const parsedBody = JSON.parse(response.body)
            expect(parsedBody.responseCode).to.eq(200)
            expect(parsedBody.message).to.eq("User exists!")
        })
    })

    it("POST to verify login without email parameter", () => {
        cy.get('@userData').then((userData) => {
            cy.request({
                method: "POST",
                url: url,
                form: true,
                body: {
                    password: userData.password
                }
            })
        }).then((response) => {
            console.log(response.body)
            const parsedBody = JSON.parse(response.body)
            expect(parsedBody.responseCode).to.eq(400)
            expect(parsedBody.message).to.eq("Bad request, email or password parameter is missing in POST request.")
        })
    })

    it("DELETE to verify login", () => {
        cy.request({
            method: "DELETE",
            url: url,
        }).then((response) => {
            const parseBody = JSON.parse(response.body)
            expect(parseBody.responseCode).to.eq(405)
            expect(parseBody.message).to.eq("This request method is not supported.")
        })
    })

    it("POST to verify login with invalid details", () => {
        cy.request({
            method: "POST",
            url: url,
            form: true,
            body: {
                email: "invalid@mail.com",
                password: "invalidpass"
            }
        }).then((response) => {
            const parsedBody = JSON.parse(response.body)
            expect(parsedBody.responseCode).to.eq(404)
            expect(parsedBody.message).to.eq("User not found!")
        })
    })

    
})