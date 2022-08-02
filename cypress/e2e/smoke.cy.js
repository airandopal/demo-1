describe("Testing parity of refactored version", () => {
	it("gets original scale values for images", () => {
		cy.clock();
		cy.visit("https://tympanus.net/Development/RepetitionHoverEffect/");
		cy.get("body").should("have.class", "loading");
		cy.tick(6000); // length of loading animation
		cy.get("body").should("not.have.class", "loading");

		cy.mainWork({ additionalWork: false, version: "original" })

	});

	it("test that scale values are the same", () => {
		cy.clock();
		cy.visit('https://demo-1-mu.vercel.app/main')

		cy.get(`[data-cy="loading-screen"]`).should("exist");
		cy.get(`[data-cy="loading"]`).should("exist");
		cy.tick(6000); // length of loading animation
		cy.get(`[data-cy="loading-screen"]`).should("not.exist");
		cy.get("main").should("have.class", "animate-fade-in-up");
		cy.get(`[data-cy="loaded"]`).should("exist");

		cy.task('get_scaleValues').then((sv) => {
			cy.log(`got scale values`, sv)
		})

		cy.mainWork({ additionalWork: true, version: 'new' })

	})
});
