import {describe, it, before, after} from "node:test";
import {strict as assert} from "node:assert";
import { hostPage } from "../host.js";

describe("server smoke", async () => {
  let server = null;
  let port = null;
  const relativeFetch = (path, options) => { return fetch(`http://localhost:${port}${path}`, options); };

  before(async () => {
    // wait for server to start by fetching 'GET /' and waiting for 200 for 10 seconds
    const host = hostPage();
    server = host.server;
    port = host.port;

    await new Promise((resolve, reject) => {
      let timeout = setTimeout(() => { reject(new Error("Server did not start in 10 seconds")); }, 10000);
      let interval = setInterval(async () => {
        try {
          var response = await relativeFetch(`/`);
          if (response.status === 200) {
            clearTimeout(timeout);
            clearInterval(interval);
            resolve();
          }
        } catch (err) {
          // Ignore
        }
      }, 100);
    });
  });
  after(() => {
    server.close();
  });

  it("'GET /' returns 200", async () => {
    var response = await relativeFetch(`/`);
    assert.equal(200, response.status);
  });

  it("'GET /404' returns 404", async () => {
    var response = await relativeFetch(`/404`);
    assert.equal(404, response.status);
  });
});