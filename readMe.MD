# This project is of type script. Step by step guild from express js with simple API
* Create new project with nodeJs with express JS.
* to add type script in project :  yarn add typescript --dev
* this project explain about the basics of project 
* nodemon is node application runtime. the difference between node and nodeman is
    * Nodeman takes the runtime changes and execute at the same time without re-starting the application
* Execute below command in project directory where package.json file is present
       ``` npm install
       ```
* Check access logging and url to use : http://localhost:8786/api/remoteAdressUrl?qs1=you&qs2=tube
* Only problem here in this aproach is request query based routing is not possible.
    * Liked we have in spring @requestParam, Here we have @PathVariable(:msg) in TodoController
    * i think, to overcome this kind of problem , we have below things 
        * https://www.npmjs.com/package/routing-controllers#inject-query-parameters
        * https://www.npmjs.com/package/routing-controllers-openapi
        * We will have separate project for this also.

* How to run project, 
    ```npm start```     
