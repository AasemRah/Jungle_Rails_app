describe('add_to_cart functionality', () => {
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

  it('can visit the homepage', () => {
    cy.visit('/')
  })

  it('lets you add a product to the cart and checks that cart count increases by 1', () => {
    cy.contains('My Cart (0)')

    cy.contains('Add').first().click({force: true})

    cy.contains('My Cart (1)')
  })

});