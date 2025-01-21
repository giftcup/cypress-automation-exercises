const url = "https://automationexercise.com/api/searchProduct"

describe("API tests for search endpoints", () => {
    it("POST to search product", () => {
        cy.request({
            method: "POST", 
            url: url,
            form: true,
            body: {
                search_product: "top"
            },
        }).then((response) => {
            const parsedBody = JSON.parse(response.body)
            expect(parsedBody.responseCode).to.eq(200)
            expect(parsedBody.products).to.not.be.null
        })
    })

    it("POST to search product without search_product parameter", () => {
        cy.request({
            method: "POST", 
            url: url,
        }).then((response) => {
            const parsedBody = JSON.parse(response.body)
            expect(parsedBody.responseCode).to.eq(400)
            expect(parsedBody.message).to.eq("Bad request, search_product parameter is missing in POST request.")
        })
    })
})