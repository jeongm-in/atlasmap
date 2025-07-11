const { TextEncoder } = require('util');
const fetch = require('node-fetch');

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}
if (!globalThis.Headers) {
  globalThis.Headers = fetch.Headers;
}
if (!globalThis.Request) {
  globalThis.Request = fetch.Request;
}
if (!globalThis.Response) {
  globalThis.Response = fetch.Response;
}
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
