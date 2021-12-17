const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello!").end();
})

app.listen(process.env.PORT || 8080, () => {
    console.log("[Main] Server started");
})
