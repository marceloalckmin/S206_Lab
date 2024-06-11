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
    login(infos[0], "inatelsemfio")
    cy.wait(200)
    cy.on('window:alert', (t) => {
      expect(t).to.equal("Wrong password")
    })
  })

  it('Adicionando um produto no carrinho e fazendo a compra', () => {
    let infos = criarUsuario()
    login(infos[0], infos[1])
    cy.wait(300)
    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#cartur').click()
    cy.get('.col-lg-1 > .btn').click()
    cy.wait(500)
    cy.get('#name').type('Abc')
    cy.get('#country').type('Brazil')
    cy.get('#city').type('Santa Rita do Sapucai')
    cy.get('#card').type('035999641520')
    cy.get('#month').type('04')
    cy.get('#year').type('2025')
    //cy.wait(300)
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(300)
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
  cy.wait(300)
  cy.get('#signin2').click()
  cy.wait(500)
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
  cy.wait(500)
  cy.get('#login2').click()
  cy.wait(500)
  cy.get('#loginusername').type(usuario, {delay : 0})
  cy.wait(300)
  cy.get('#loginpassword').type(senha)
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
}