describe("Movie detail", () => {
  before(() => {
    cy.fixture("movieDetail").then((movieDetail) => {
      cy.route2("/?i=tt0088680", (req) => {
        req.reply((res) => {
          res.send(movieDetail);
        });
      }).as("getMovie");
    });

    cy.visit("http://localhost:3000/tt0088680");

    cy.wait("@getMovie");
  });

  const sizes = [
    { width: 1200, height: 900 },
    { width: 1024, height: 900 },
    { width: 768, height: 900 },
    { width: 340, height: 900 },
  ];

  sizes.forEach((size) => {
    it(`on ${size.width}x${size.height} screen`, () => {
      cy.viewport(size.width, size.height);
      cy.document().toMatchImageSnapshot();
    });
  });
});
