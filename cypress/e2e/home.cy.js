describe("test the home page", () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com/")
    })
    
    context("Hero section", () => {
        it("checks if heading is contains correct text", () => {
            cy.get("h1").eq(0).contains("AutomationExercise")
        })
        it("buttons contain correct text", () => {
            cy.get('button').eq(0).contains("Test Cases")
            cy.get('button').eq(1).contains("APIs list for practice")
            cy.get('button').eq(2).contains("Test Cases")
            cy.get('button').eq(3).contains("APIs list for practice")
            cy.get('button').eq(4).contains("Test Cases")
            cy.get('button').eq(5).contains("APIs list for practice")
        })
    })
})
