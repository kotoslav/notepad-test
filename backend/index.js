import express from "express";
import cors from "cors";
import process from "process";
import Ajv from "ajv";


const schema = {
    type: "array",
    items: {
        type: "object",
        properties: {
            id: {type: "number"},
            text: {type: "string"}
        }
    }
};

const ajv = new Ajv();
const validate = ajv.compile(schema);

let tabs = [];

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/", (req, res) => {
    res.json(tabs);
});

app.post("/api/", (req, res) => {
    try {
        if (! validate(req.body)) {
            throw 'validation error';
        }
        tabs = req.body;
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e });
        return;
    }
    console.log(tabs);
    res.json({status: "succes"});
});


app.listen(port, () => {
    console.log("Server listening on port", port);
});