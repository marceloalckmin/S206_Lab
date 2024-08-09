#Prova postman com a api Swagger Petstore que pode ser encontrada no link https://petstore.swagger.io

Para executar o projeto gerando relatórios, primeiramente você precisa baixar o node.js através deste site:

https://nodejs.org/en


Em seguida você precisa ter o newman instalado em seu computador, que é instalado por este comando:

npm install -g newman

Após isso você precisa ter o htmlextra instalado, que é instalado por esse comando:
'''
npm install -g newman-reporter-htmlextra
'''


Feito isso, você pode rodar o newman para gerar o relatório html dentro da pasta "newman" usando o seguinte comando:

newman run "Lista - Postman.postman_collection.json" -r htmlextra

Agora caso queira executar o projeto dentro do postman, é necessário ter o postman instalado, você pode baixá-lo através desse link:
https://www.postman.com

Logo após a instalação do postman, você precisa importar a colection Lista - Postman pelo botão "import" no canto superior esquerdo do Postman e selecionar a collection da lista
Enfim, quando tiver importado você pode rodar manualmente cada request pelo próprio postman, assim como ver os scripts das assertivas
