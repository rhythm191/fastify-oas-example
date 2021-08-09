import fastify from "fastify";
import app from "./app";
import { writeFileSync } from "fs";

const init = async () => {
    const server = fastify();
    server.register(app);

    server.ready(async (err) => {
        if (err) throw err;

        console.log("generate docs");

        // generate sjon
        const responseJson = await server.inject("/docs/json");
        writeFileSync("docs/openapi.json", responseJson.payload);

        // generate yaml
        const responseYaml = await server.inject("/docs/yaml");
        writeFileSync("docs/openapi.yaml", responseYaml.payload);
    });
};

init();
