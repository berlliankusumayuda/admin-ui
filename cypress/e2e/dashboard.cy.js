describe("Akses halaman Dashboard (Overview)", () => {
  it("should redirect unauthenticated user to login page when accessing dashboard", () => {
    cy.viewport(1280, 800);
    cy.visit("http://localhost:5173/");

    // Karena user belum login, harus diarahkan ke halaman login
    cy.url().should("include", "/login");
  });

  it("should log in and land on the dashboard (overview) page with all its sections visible", () => {
    cy.viewport(1280, 800);
    cy.visit("http://localhost:5173/login");

    cy.get("input#email")
      .should("be.visible")
      .type("hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .type("123456");

    cy.get("button").contains("Login").click();

    // Setelah login berhasil, user diarahkan ke halaman dashboard (overview)
    cy.url({ timeout: 10000 }).should("eq", "http://localhost:5173/");

    // Sidebar dan header dashboard harus tampil
    cy.get("aside").should("be.visible");
    cy.get("main").should("be.visible");

    // Menu "Overview" pada sidebar harus berstatus aktif
    cy.contains("a", "Overview").should(
      "have.class",
      "bg-primary"
    );

    // Card-card utama pada halaman overview harus tampil
    cy.contains("Total Balance").should("be.visible");
    cy.contains("Goals").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
    cy.contains("Recent Transactions").should("be.visible");
    cy.contains("Statistics").should("be.visible");
    cy.contains("Expenses Breakdown").should("be.visible");
  });
});
