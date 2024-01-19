const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const {PRIVATE_KEY, PROJECT_ID} = require("./secrets.js");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    // get username variable from request
    const { username, secret, email, first_name, last_name } = req.body;

    try {
        const r = await axios.post(
          "https://api.chatengine.io/users/",
          { username, secret, email, first_name, last_name },
          { headers: { "Private-Key": PRIVATE_KEY } }
        );
        return res.status(r.status).json(r.data);
      } catch (e) {
        return res.status(e.response.status).json(e.response.data);
      }
}) ;



app.listen(3001, () => console.log("Starting on port 3001"));