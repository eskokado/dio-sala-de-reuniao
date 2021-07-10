# dio-sala-de-reuniao
Projeto: Crie seu gerenciador de salas de reuniões com Java e Angular
Aula da Digital Innovation One com a especialista kamila Santos

### BackEnd:
#### Foi criada uma Rest API com Spring Boot
##### Um CRUD para criação de salas de reunião (Uma tabela com Id, nome da sala, data, hora início, hora fim) 
##### Utilizado o banco de dados H2 em memória

### FrontEnd:
#### Foi desenvolvida uma SPA utilizando o Angular
#### Foram criados os componentes para adicionar, listar, detalhes, atualizar e excluir dados da tabela criada no backEnd

##### Instalação:
##### O backend -> pasta: backend
> executar o comando
```shell script
mvn spring-boot:run
```
##### O frontend -> pasta: client-room 
> executar cada comando em cada janela
```shell script
npm start
```
```shell script
npm run cypress
```

### Testes - Cypress
#### Testar na seguinte ordem

>> app-init
>> add-client-room
>> details-client-room
>> update-client-room
>> delete-client-room
