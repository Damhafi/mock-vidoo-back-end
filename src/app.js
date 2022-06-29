const app = require("./lib/express");
const dotenv = require("dotenv");
const routes = require("./routes/index");

dotenv.config();

const port = process.env.PORT || 5002;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})