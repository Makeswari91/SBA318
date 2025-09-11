# Buliding server, step by step

1.  `touch server.js` - create a server.js file
2.  `npm init -y` - command to create package.json 
3.  change all `server.js` to `servr.mjs`in dir & package.json
4. **optional** Install nodemon locally if not installed globally `npm i --save-dev`
      to install - `npm install -g nodemon`
5. create nodemon start script in package.json `"dev": "nodemon server.mjs"`
6. `npm i express` - install express dependancy to package.jsonnode   


## constructing out server.mjs
1. `import express from 'express'`;
2. `const app = express()` -- creates an instance of express
3.  `const PORT= 3000` -- create port variable
4. `app.listen(PORT, ()=>{console.log(`Server running on port: ${PORT}`)})`

### Creating data, routes and Views

1. creating three routes and data for "users", "posts" and "comments"
2. setup 'views' and 'view engine' 