const express = require("express")
const app = express();

app.use(express.static("public"));

app.listen(3030, "127.0.0.1" , () => {
    console.log("server on port 3030");
});