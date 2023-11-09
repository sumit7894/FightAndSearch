const express = require("express")
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');
const setupAndStartServer = async ()=>{
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:"true"}));
    const PORT = 3000;
    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
    });
}

setupAndStartServer();