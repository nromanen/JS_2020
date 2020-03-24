'use strict';

import fs from 'fs';
import { resolve as  resolvePath } from 'path';

export function getHomePage(response) {
    let filePath = resolvePath(global.serverRoot, './Views/Index.html');
    let promise = readHTML(filePath);
    promise.then((result) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(result);
    }).catch((reason) => {
        console.error(reason);
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end(`<h1>404. That's an error.</h1>\n
        <h2>The requested URL/storage was not found on this server.</h2>`);
    });
}

function readHTML(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                let promise = getUsersTableHTML();
                promise.then((result) => {
                    resolve(data.replace('{content}', result));
                }).catch((reason) => {
                    console.error(reason);
                    resolve(data.replace('{content}', ''));
                });
            }
        });
    });
}

function getUsersTableHTML() {
    let filePath = resolvePath(global.serverRoot, './Views/Shared/_Users.html');

    return new Promise((resolve, reject) => {
        fs.access(filePath, fs.constants.R_OK, err => {
            if (err) {
                reject(err);
            } else {
                let data = '';
                const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
                stream.on('data', (chunk) => {
                    data += chunk;
                });
                stream.on('end', () => {
                    let promise = getTableRecordsHTML();
                    promise.then((result) => {
                        resolve(data.replace('{rows}', result));
                    }).catch((reason) => {
                        console.error(reason);
                        reject(err);
                    });
                });
            }
        });
    });
}

function getTableRecordsHTML() {
    let filePath = resolvePath(global.serverRoot, global.usersData);
    let tableRows = '';

    return new Promise((resolve, reject) => {
        fs.access(filePath, fs.constants.R_OK, err => {
            if (err) {
                reject(err);
            } else {
                let data = '';
                const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
                stream.on('data', (chunk) => {
                    data += chunk;
                });
                stream.on('end', () => {
                    const jsonContent = JSON.parse(data);
                    jsonContent.forEach((obj, ind) => {
                        tableRows += `
                        <tr>
                            <td>${ind + 1}</td>
                            <td>${obj.username}</td>
                            <td>${obj.password}</td>
                            <td>${obj.email}</td>
                            <td>${obj.phone}</td>
                        </tr>`;
                    });
                    resolve(tableRows);
                });
            }
        });
    });
}