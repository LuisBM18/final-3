const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
  res.send('hola desde MINIMARKET BELU');
});

routerApi(app);

app.listen(port,()=>{
  console.log("express server activo"+port);
});
