const url = "https://automationexercise.com/api/productsList"

describe("API tests for product endpoints", () => {
    it("gets all products list", () => {
        cy.request("GET", url).
        then((response) => {
            const parsedBody = JSON.parse(response.body)
            expect(parsedBody.responseCode).to.eq(200)
            expect(parsedBody.products).to.not.be.null
        })
    })
    
    it("posts to all product list", () => {
        cy.request("POST", url).
        then((response) => {
            const parsedBody = JSON.parse(response.body)
            expect(parsedBody.responseCode).to.eq(405)
            expect(parsedBody.message).to.eq("This request method is not supported.")
        })
    })
})