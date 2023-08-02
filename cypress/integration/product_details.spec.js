describe('product details page', () => {
  it('can visit the homepage', () => {
    const username = 'Jungle';
    const password = 'Book';

    cy.visit('http://localhost:3000', {
      auth: {
        username: username,
        password: password,
      },
    });
  });




  it("There is products on the page", () => {
    cy.get(".products article").should("be.visible");
  });

  it("There is 2 products on the page", () => {
     cy.get(".products article").should("have.length", 12);
   });

   it('lets you visit the selected product detail page', () => {
    cy.visit('/')
    cy.get(".products article").first().click()
    cy.url().should("include", "/products/2")

  })
});


