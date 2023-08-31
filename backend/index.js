const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: ["https://chatapp-frontend-three.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put("https://api.chatengine.io/users/",{username: username, secret: username, first_name: username},{headers:{"private-key":"5e7a14f5-deb3-4037-8745-a8e0677d4dae"}});
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001);
