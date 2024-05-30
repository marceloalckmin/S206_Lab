//Esse site é um site pra ver que item comprar pra cada campeão, quais tão no meta, qual o desempenho da sua conta, seus pontos fortes e fracos, etc
//As opções de caso de teste ficaram meio limitadas com esse site que eu escolhi, tem muita coisa que eu poderia fazer mas que não consegui quando tentei
//Por isso os casos de teste estão meio basicos, não sei se a complexidade dos testes são relevantes pra lista ou não

describe('Cenário de testes com o Mobalytics', () => {
  it('Criação de usuário com uma conta de LoL inexistente', () => {
    let conta = "Serra Sul Shopping#Inatel"
    let infos = criarUsuario(conta)
    cy.get('.css-p0i13t').should("contain.text", "Unfortunately, we were unable to find")
    //caso negativo, tá testando um erro
  })

  it('Criação de usuário com uma conta de LoL existente', ()=> {
    let conta = "choba#BR1"
    let infos = criarUsuario(conta)
    cy.get('.m-1469bgl > span').should("contain.text", conta)
  })

  it('Busca de campeão que não existe', ()=>{
    //Campeão é o nome do personagem que você controla no LoL
    cy.visit('https://mobalytics.gg/lol')
    cy.get('.search-input-large > .m-boim1b').type("AADSAKDAJSKDASDKAJS")
    cy.get('.m-1flj9lk').should("contain.text", "We can’t find a summoner in BR region.") 
    //como não achou campeão nem uma conta que tenha o nick igual ao que foi digitado, essa mensagem aparece
  })

  it('Busca de campeão que existe', ()=>{
    //testa se é possivel acessar o campeão escolhido e se ao acessar a página é realmente do campeão desejado
    let campeao = "Malphite"
    cy.visit('https://mobalytics.gg/lol')
    cy.get('.search-input-large > .m-boim1b').type(campeao)
    cy.get('.m-1854z0h').click()
    cy.get('.m-le01f2').should("contain.text", campeao)
  })

  it('Login na conta criada com sucesso', ()=>{
    let conta = "choba#BR1"
    let infos = criarUsuario(conta)
    cy.get('.m-11so48u > :nth-child(1)').click()
    cy.get('.m-1p16xav > :nth-child(2) > .m-ylsuty').click()
    cy.get('#menu-item-35883 > a').click()
    cy.login(infos[2],infos[1])
    //verificando agora se deu certo
    cy.get('.m-11so48u > :nth-child(1)').click()
    cy.get(':nth-child(3) > .m-1ygd6j2').click()
    cy.get('.m-19ao4qt').should("contain.text", conta)
  })

  it('Tentativa de login com credenciais incorretas', ()=>{
    let conta = "choba#BR1"
    let infos = criarUsuario(conta)
    cy.get('.m-11so48u > :nth-child(1)').click()
    cy.get('.m-1p16xav > :nth-child(2) > .m-ylsuty').click()
    cy.get('#menu-item-35883 > a').click()
    cy.login(infos[2],'asdkaskdjaskdjas')
    cy.get('.css-wbabul').should('contain.text', "Our guards didn't recognize you. Make sure that your email and password are correct below.")
  })

})

function criarUsuario(contalol){
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let segundo = new Date().getSeconds().toString()
  let usuario = "Testador de Jogos Eletronicos"
  let senha = hora + minuto + segundo + "Senha"
  let email = hora + minuto + segundo + "email@gmail.com"
  let conta = contalol
  let infos = [usuario, senha, email, conta]

  cy.visit('https://mobalytics.gg/lol')
  cy.get('.m-11so48u > :nth-child(1)').click()
  cy.get(':nth-child(2) > .m-1ygd6j2').click()
  cy.get('.m-10anfxf').click()
  cy.get('#email').type(email)
  cy.get('#name').type(usuario)
  cy.get('#password').type(senha)
  cy.get('.css-1rohcaa').click()
  cy.get('.e6fki6x4').type(conta)
  cy.get('.css-b9hjje').click()
  cy.get('.css-z2woa6 > :nth-child(14)').click()
  cy.get('.css-1rohcaa').click()
  return infos
}