"use strict";

import fs, { write } from "fs";
import { join, resolve } from "path";

export function getStaticStyle(url, response) {
    let filePath = join(global.serverRoot, url);
    fs.access(filePath, fs.constants.R_OK, err => {
        if (err) {
            console.error(err);
            response.writeHead(500, { "Content-Type": "text/css" });
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "text/css" });
            fs.createReadStream(filePath, {encoding: "utf8"}).pipe(response);
        }
    });
}

export function getStaticScript(url, response) {
    let filePath = join(global.serverRoot, url);
    fs.access(filePath, fs.constants.R_OK, err => {
        if (err) {
            console.error(err);
            response.writeHead(500, { "Content-Type": "text/javascript" });
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "text/javascript" });
            fs.createReadStream(filePath, {encoding: "utf8"}).pipe(response);
        }
    });
}