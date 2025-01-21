import { CommonActions } from "../actions/CommonActions"

const ca = new CommonActions();
const url = "https://automationexercise.com/api/getUserDetailByEmail"

describe("API tests for user detail endpoints", () => {
    beforeEach(() => {
        cy.fixture("user/user.json").then((user) => {
            cy.wrap(user).as("userData")
        })
        // const fixture_path = "user/user.json"
        // ca.loadFixtureData(fixture_path)
    })

    it("GET user account detail by email", () => {
        cy.get("@userData").then((userData) => {
            cy.request({
                method: "GET",
                url: `${url}?email=${userData.email}`,
            })
        }).then((response) => {
            const parsedBody = JSON.parse(response.body)
            console.log(parsedBody)
            expect(parsedBody.responseCode).to.eq(200)
            expect(parsedBody.user).to.not.be.null
        })
    })
})