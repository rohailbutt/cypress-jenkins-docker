describe("example to-do app", () => {
  it.only("it should get the logged in user", () => {
    cy.request({
      method: "POST",
      url: "auth/login",
      body: {
        email: `admin@amotius.com`,
        password: `kin@123456`,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      cy.log(res.body.user.token);
    });
  });
});
