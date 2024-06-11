#Lista de exercicios com POSTMAN

Essa lista foi feita utilizando a api referente a tabela fipe encontrada no site https://veiculos.fipe.org.br

O link para ver a documentação da api é esse: https://deividfortuna.github.io/fipe/v2/

Para executar o projeto gerando relatórios, primeiramente você precisa baixar o node.js através deste site:

https://nodejs.org/en


Em seguida você precisa ter o newman instalado em seu computador, que é instalado por este comando:

npm install -g newman

Após isso você precisa ter o htmlextra instalado, que é instalado por esse comando:

npm install -g newman-reporter-htmlextra

Feito isso, você pode rodar o newman para gerar o relatório html dentro da pasta "newman" usando o seguinte comando:

newman run "Lista - Postman.postman_collection.json" -r htmlextra

Agora caso queira executar o projeto dentro do postman, é necessário ter o postman instalado, você pode baixá-lo através desse link:
https://www.postman.com

Logo após a instalação do postman, você precisa importar a colection Lista - Postman pelo botão "import" no canto superior esquerdo do Postman e selecionar a collection da lista
Enfim, quando tiver importado você pode rodar manualmente cada request pelo próprio postman, assim como ver os scripts das assertivas


Respostas do exercicio 2:

1: Uma suite de testes ou spec, no entanto foram desenvolvidos 6 casos de teste

2: Os testes desenvolvidos são automatizados

3: Esses são testes de integração

4: Os testes são funcionais

5: Não pois esses são testes de API, então não se encaixam completamente na categoria E2E

6: Integrar a um controle de versão, isolar ou simular dados e fazer a manutenção dos testes
