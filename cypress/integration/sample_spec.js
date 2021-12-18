
describe('landing page', () => {
    it('Visits the landing page', () => {
        cy.visit('/')
    })
})


describe('login page test', () => {
    it('finds the content "login"', () => {
        cy.visit('/')

        cy.contains('login')
    })
})


describe('login click test', () => {
    it('click the content "login"', () => {
      cy.visit('/')
  
      cy.contains('login').click()
    })
})


describe('test login button',()=>{
    it ('check if login page has login button',()=>{
      cy.visit('/')
      cy.contains('login').click()
      cy.contains('Login').click()

    })

  })


  describe(' test login  ', () => {
    it('with correct credtionals', () => {
      cy.visit('/login')
      cy.get("input[name=username]").type("khaled");
    cy.get("input[name=password]").type("1234").type("{enter}");
    cy.location("pathname").should("include", "/Task");
    })
  })

  describe(' test login2  ', () => {
    it('with wrong credtionals', () => {
      cy.visit('/Login')
      cy.get("input[name=username]").type("khaled");
    cy.get("input[name=password]").type("1234").type("{enter}");
    cy.location("pathname").should("include", "/Login");
    })
  })