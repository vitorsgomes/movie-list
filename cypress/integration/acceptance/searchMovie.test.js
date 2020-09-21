describe("Searching a movie", () => {
  it("allow user to search movies and paginates it", () => {
    cy.fixture("movieList").then((movieList) => {
      cy.route2("/?s=after%20hours&type=movie&page=1", (req) => {
        req.reply((res) => {
          res.send(movieList);
        });
      });
    });

    cy.fixture("movieList").then((movieList) => {
      const movies = movieList.Search;
      movies[0].Title = "The Kennedy Assassination: 24 Hours After";
      movies[1].Title = "The Weeknd: After Hours";

      cy.route2("/?s=after%20hours&type=movie&page=2", (req) => {
        req.reply((res) => {
          res.send(movieList);
        });
      });
    });

    cy.visit("http://localhost:3000");

    cy.get("input").type("after hours");
    cy.get('button[data-testid="search-button').click();

    cy.get('img[alt="After Hours poster"]').should("have.length", 1);

    cy.get('button[data-testid="load-more-button').click();

    cy.get(
      'img[alt="The Kennedy Assassination: 24 Hours After poster"]'
    ).should("have.length", 1);

    cy.get('button[data-testid="load-more-button').should("have.length", 0);
  });
});
