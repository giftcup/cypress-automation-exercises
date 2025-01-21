const url = "https://automationexercise.com/api/brandsList"

describe("API tests for brand endpoints", () => {
    it("get all brand lists", () => {
        cy.request("GET", url).
        then((response) => {
            const parsedBody = JSON.parse(response.body)
            expect(parsedBody.responseCode).to.eq(200)
            expect(parsedBody.brands).to.not.be.null
        })
    })

    it("put to all brands", () => {
        cy.request("PUT", url).
        then((response) => {
            const parsedBody = JSON.parse(response.body)
            expect(parsedBody.responseCode).to.eq(405)
            expect(parsedBody.message).to.eq("This request method is not supported.")
        })
    })
})