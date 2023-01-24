# People Management 

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)	![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

##  👨‍💻   Alex Coelho 

### Application to manage people
### Node version used
```
v14.18.0
```
### Npm version used
```
6.14.15
```


## :beginner: get project and run locally
1️⃣. clone the project
 ```
 git clone https://github.com/alexcastelocoelho/People-Management.git
 ```
2️⃣. install dependencies
 ```
 npm install
 ```
 :three:. create an .env file and set the environment variables. use the .env.example file as a reference to set
 ```
    DB_HOST=
	DB_USER=
	DB_PASSWORD=
	DB_NAME=
	PORT=
 ```
3️⃣. execute the project
 ```
 npm run start
 ```


## 📄 endpoints aplication 
##### see below examples of how you should insert in the body of the postman/insomnia to use the application endpoints
* person example
```
{
	
	"name": "ronaldo moraes",
	"cpf": "921.402.142-26",
	"birthday": "29/08/2004",
	"email": "ronaldomo@gmail.com",
	"password": "eaRiUSI"    
	
	
}
```

* endpoints person 🧑
 ```
 post -> (http://localhost:3333/people) - create person
 get -> (http://localhost:3333/people) -  list people
 get -> (http://localhost:3333/people/<person id>) - list a person
 put -> (http://localhost:3333/people/<person id>) - update person
 delete -> (http://localhost:3333/people/<person id>) - delete person
 ```





 ### :scroll: to check the API documentation, follow the steps below:
* make sure the server is active in the terminal. if it is inactive, run `npm start` in terminal
* open a browser of your choice. in the search bar type `http://localhost:3333/api-docs`. after that you can check the api documentation