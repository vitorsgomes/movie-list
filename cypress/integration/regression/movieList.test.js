describe("Movie list", () => {
  before(() => {
    cy.fixture("movieList").then((movieList) => {
      const movies = movieList.Search;
      movies.push(movies[0]);
      movies.push(movies[1]);

      cy.route2("/?s=after%20hours&type=movie&page=1", (req) => {
        req.reply((res) => {
          res.send(movieList);
        });
      }).as("getMovies");
    });

    cy.visit("http://localhost:3000");

    cy.get("input").type("after hours");
    cy.get('button[data-testid="search-button').click();

    cy.wait("@getMovies");
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
