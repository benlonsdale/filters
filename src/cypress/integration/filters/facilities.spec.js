context("Facilities", () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });

    it("shows all initial results", () => {
        // https://on.cypress.io/type
        cy.get("#results")
            .children()
            .should($c => {
                expect($c).to.have.lengthOf(3);
            });
    });

    it("facility filters works correctly", () => {
        //uncheck filter
        cy.get('input[name="car park"]').click();
        cy.get("#results")
            .children()
            .should($c => {
                expect($c).to.have.lengthOf(2);
            });

        cy.get('input[name="pool"]').click();
        cy.get("#results")
            .children()
            .should($c => {
                expect($c).to.have.lengthOf(1);
            });

        cy.get('input[name="gym"]').click();
        cy.get("#results")
            .children()
            .should($c => {
                expect($c).to.have.lengthOf(0);
            });

        //uncheck filters
        cy.get('input[name="pool"]').click();
        cy.get('input[name="gym"]').click();
        cy.get('input[name="car park"]').click();
        cy.get("#results")
            .children()
            .should($c => {
                expect($c).to.have.lengthOf(3);
            });
    });
});
