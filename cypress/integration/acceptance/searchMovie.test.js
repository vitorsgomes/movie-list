describe("Searching a movie", () => {
  it("allow user to search movies and access details", () => {
    cy.fixture("movieList").then((movieList) => {
      cy.route2("/?s=after%20hours&type=movie&page=1", (req) => {
        req.reply((res) => {
          res.send(movieList);
        });
      });
    });

    cy.fixture("movieDetail").then((movieDetail) => {
      cy.route2("/?i=tt0088680", (req) => {
        req.reply((res) => {
          res.send(movieDetail);
        });
      });
    });

    cy.visit("http://localhost:3000");

    cy.get("input").type("after hours");
    cy.get('button[data-testid="search-button').click();

    cy.get('img[alt="After Hours poster"]').click();

    cy.contains("Martin Scorsese");
    cy.contains("Griffin Dunne, Rosanna Arquette, Verna Bloom, Tommy Chong");
  });
});
