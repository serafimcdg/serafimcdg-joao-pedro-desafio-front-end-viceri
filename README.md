# Desafio Front End Viceri | Seidor

Desenvolvedor: João Pedro Serafim

Desafio: É criar uma aplicação web para realizar cadastros de tarefas, onde cada
desenvolvedor do time possa entrar na aplicação e cadastrar suas respectivas tarefas e em
qual status está tarefa encontra-se (Ex: concluída, iniciada, bloqueada...).

## Desenvolvimento

O desafio foi desenvolvido a partir de algumas inspirações, como: O Estilo Kanban (Drag and Drop) e O Trello com suas atribuições de cor, acredito que esse sistema é agradavel e funcional, o que motivou a escolha.
O projeto foi desenvolvido em duas partes, primeiramente a configuração e estrutura do projeto. E em seguida o desenvolvimento do projeto em si. O projeto foi desenvolvido a partir da Angular v16 e também foi utilizado o json-server na sua v8.19.2, com o intuito de simular requições reais.

## Especificações para rodar o projeto

Para que seja possivel rodar o projeto será necessario:

- node v18.10.0
- angular v16.2.0

## Rodando o projeto passo a passo

- Faça o download ou o gitclone do repositório
- Acesse a pasta desafio-front-end-viceri
- Abra dois terminais, pois será necessario rodar o angular e o json-server em portas distintas
- No primeiro terminal rode o comando: ng serve
- No segundo, o comando json-server --watch db.json --port 3001 , ou a porta que desejar. Lembre-se a porta default que o angular utiliza é a 4200
- Verifique se ambos os terminais estão rodando corretamente
- Acesse o navegador com a url: http://localhost:4200/

## Comandos rapidos

json-server --watch db.json --port 3001
ng serve
