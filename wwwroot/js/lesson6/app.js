"use strict";

import { createServer } from "http";
import { getHomePage } from "./app.home.js";
import * as staticdata from "./app.staticdata.js";

const PORT = 3000;
const HOST_NAME = "localhost";

global.serverRoot = "/Volumes/Workspace/Repositories/JavaScript\ Fundamental";
global.usersData = "./Data/user.json";

function requestHandler(request, response) {
    console.log(`Request url: ${request.url}`);

    if (request.url.match("/\$") || request.url.match("/home\$")) {
        getHomePage(response);
    } else if (request.url.match("\.css\$")) {
        staticdata.getStaticStyle(request.url, response);
    } else if (request.url.match("\.js\$")) {
        staticdata.getStaticScript(request.url, response);
    } else {
        response.writeHead(404, { "Content-Type": "text/html" });
            response.end(`<h1>404. That's an error.</h1>\n
            <h2>The requested URL/storage was not found on this server.</h2>`);
    }
}

const SERVER = createServer(requestHandler);

SERVER.listen(PORT, HOST_NAME, (err) => {
    if (err) {
        return console.log("Something bad happened", err);
    } else {
        console.log(`Server is listening on "http://${HOST_NAME}:${PORT}"`);
    }
});
