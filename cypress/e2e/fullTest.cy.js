describe("Skenario End-to-End: Register, Login, Overview, Expenses, Dark Mode, Logout", () => {
  const uniqueEmail = `mahasiswa_${Date.now()}@example.com`;

  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.intercept("POST", "**/register").as("registerRequest");
    cy.intercept("POST", "**/login").as("loginRequest");
  });

  it("1. User REGISTER dengan email hello@example.com -> GAGAL (email sudah dipakai)", () => {
    cy.visit("/register");

    cy.get("input#name").should("be.visible").type("John Doe");
    cy.get("input#email").should("be.visible").type("hello@example.com");
    cy.get("input#password").should("be.visible").type("123456");

    cy.get("button").contains(/^Register$/).click();

    cy.wait("@registerRequest", { timeout: 30000 }).then((interception) => {
      expect(interception.response.statusCode).to.not.be.within(200, 299);
      cy.log("✅ Backend menolak register (status bukan 2xx)");
    });

    cy.contains("Email sudah pernah digunakan sebelumnya", { timeout: 10000 })
      .should("be.visible")
      .then(() => {
        cy.log("✅ Toast error 'Email sudah pernah digunakan sebelumnya' tampil");
      });
  });

  it("2. User REGISTER dengan email BERBEDA (unik) -> BERHASIL", () => {
    cy.visit("/register");

    cy.get("input#name").should("be.visible").type("John Doe");
    cy.get("input#email").should("be.visible").type(uniqueEmail);
    cy.get("input#password").should("be.visible").type("123456");

    cy.get("button").contains(/^Register$/).click();

    cy.wait("@registerRequest", { timeout: 30000 }).then((interception) => {
      expect(interception.response.statusCode).to.be.within(200, 299);
      cy.log("✅ Backend menerima register (status 2xx)");
    });

    cy.contains("Register Berhasil", { timeout: 10000 })
      .should("be.visible")
      .then(() => {
        cy.log("✅ Toast sukses 'Register Berhasil' tampil");
      });
  });

  it("3. User LOGIN dengan hello@example.com -> BERHASIL", () => {
    cy.visit("/login");

    cy.get("input#email").should("be.visible").type("hello@example.com");
    cy.get("input#password").should("be.visible").type("123456");

    cy.get("button").contains(/^Login$/).click();

    cy.wait("@loginRequest", { timeout: 30000 }).then((interception) => {
      expect(interception.response.statusCode).to.be.within(200, 299);
      cy.log("✅ Backend menerima login (status 2xx)");
    });

    cy.url({ timeout: 10000 })
      .should("eq", Cypress.config("baseUrl") + "/")
      .then(() => {
        cy.log("✅ Berhasil login, diarahkan ke dashboard");
      });
  });

  it("4. User menampilkan halaman OVERVIEW -> BERHASIL", () => {
    cy.visit("/login");
    cy.get("input#email").type("hello@example.com");
    cy.get("input#password").type("123456");
    cy.get("button").contains(/^Login$/).click();
    cy.wait("@loginRequest", { timeout: 30000 });

    cy.get("aside").should("be.visible");
    cy.contains("a", "Overview").should("have.class", "bg-primary");

    cy.contains("Total Balance").should("be.visible");
    cy.contains("Goals").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
    cy.contains("Recent Transactions").should("be.visible");
    cy.contains("Statistics").should("be.visible");
    cy.contains("Expenses Breakdown").should("be.visible")
      .then(() => {
        cy.log("✅ Halaman Overview tampil lengkap (Total Balance, Goals, Bills, dll)");
      });
  });

  it("5. User menampilkan halaman EXPENSES -> BERHASIL", () => {
    cy.visit("/login");
    cy.get("input#email").type("hello@example.com");
    cy.get("input#password").type("123456");
    cy.get("button").contains(/^Login$/).click();
    cy.wait("@loginRequest", { timeout: 30000 });

    cy.contains("a", "Expenses").click();

    cy.url().should("include", "/expense");
    cy.contains("a", "Expenses").should("have.class", "bg-primary");
    cy.contains("Expenses Comparison", { timeout: 15000 })
      .should("be.visible")
      .then(() => {
        cy.log("✅ Halaman Expenses tampil dengan judul 'Expenses Comparison'");
      });
  });

  it("6. User menekan TOGGLE DARK MODE -> BERHASIL", () => {
    cy.visit("/login");
    cy.get("input#email").type("hello@example.com");
    cy.get("input#password").type("123456");
    cy.get("button").contains(/^Login$/).click();
    cy.wait("@loginRequest", { timeout: 30000 });

    cy.get('[aria-label="Toggle dark mode"]').click();
    cy.get("aside").parent()
      .should("have.class", "dark")
      .then(() => {
        cy.log("✅ Dark mode aktif");
      });

    cy.get('[aria-label="Toggle dark mode"]').click();
    cy.get("aside").parent()
      .should("not.have.class", "dark")
      .then(() => {
        cy.log("✅ Berhasil kembali ke light mode");
      });
  });

  it("7. User LOGOUT -> BERHASIL", () => {
    cy.visit("/login");
    cy.get("input#email").type("hello@example.com");
    cy.get("input#password").type("123456");
    cy.get("button").contains(/^Login$/).click();
    cy.wait("@loginRequest", { timeout: 30000 });

    cy.contains("Logout").click();

    cy.url({ timeout: 10000 })
      .should("include", "/login")
      .then(() => {
        cy.log("✅ Berhasil logout, diarahkan ke halaman login");
      });
  });
});
