///reference = cypress

describe('Cenário de testes', () => {
  it('Criação de usuário bem sucedida', () => {
      criarUsuario()
      cy.wait(1000)
      cy.on('window:alert',(t)=>{
        expect(t).to.contains('Sign up successful.');
      })
  })

  it('Login bem sucedido', () => {
    let infos = criarUsuario()
    cy.wait(200)
    login(infos[0], infos[1])
    cy.get('#nameofuser').should("contain.text", infos[0])
  })

  it('Login falho com senha errada', () => {
    let infos = criarUsuario()
    login(infos[0], "mushokusunday")
    cy.wait(500)
    cy.on('window:alert',(t)=>{
      expect(t).to.contains('Wrong password.');
    })
  })

  it('Fazendo a compra de um produto, especificamente o primeiro produto que aparece na pagina principal', () => {
    let infos = criarUsuario()
    login(infos[0], infos[1])
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click({force: true})
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#cartur').click()
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type('Antedeguemon')
    cy.get('#country').type('Brazil')
    cy.get('#city').type('Santa Rita do Sapucai')
    cy.get('#card').type('035999641520')
    cy.get('#month').type('04')
    cy.get('#year').type('2025')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('.sweet-alert').should("contain.text", "Thank you for your purchase!")
    })

})

function criarUsuario(){
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let segundo = new Date().getSeconds().toString()
  let usuario = hora + minuto + segundo + "User"
  let senha = hora + minuto + segundo
  let infos = [usuario, senha]

  cy.visit('https://www.demoblaze.com/index.html')
  cy.get('#signin2').click()
  //cy.wait(100)
  cy.get('#sign-username').type(usuario,{delay:0})
  cy.wait(300)
  cy.get('#sign-password').type(senha)
  //cy.wait(100)
  cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  return infos
}

function login(user, password){
  let usuario = user
  let senha = password

  cy.visit('https://www.demoblaze.com/index.html')
  cy.get('#login2').click()
  cy.get('#loginusername').type(usuario, {delay : 0})
  cy.wait(300)
  cy.get('#loginpassword').type(senha)
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
}