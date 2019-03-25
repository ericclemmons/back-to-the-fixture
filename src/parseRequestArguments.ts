const { URL, parse } = require("url");

/**
 * Parse possible arguments passed into `new http.ClientRequest`.
 *
 * @export
 * @param {string | URL} [url]
 * @param {Object} [options]
 * @param {Function} [callback]
 * @returns {Object}
 */
// @ts-ignore
export function parseRequestArguments(url, options, callback) {
  if (typeof url === "string") {
    url = parse(url);
  } else if (URL && url instanceof URL) {
    url = parse(`${url}`);
  } else {
    callback = options;
    options = url;
    url = null;
  }

  if (typeof options === "function") {
    callback = options;
    options = null;
  }

  options = { ...(url || {}), ...(options || {}) };

  return { options, callback };
}
