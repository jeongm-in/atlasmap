const { Headers, Request, Response, fetch } = require('undici');

global.Headers = Headers;
global.Request = Request;
global.Response = Response;
global.fetch = fetch;

globalThis.Headers = Headers;
globalThis.Request = Request;
globalThis.Response = Response;
globalThis.fetch = fetch;
