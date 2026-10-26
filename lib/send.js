'use strict';
// 统一响应出口：send(res, status, body, headersOrType)
function send(res, status, body, opts) {
  const headers = typeof opts === 'string' ? { 'Content-Type': opts } : opts || {};
  res.writeHead(status, headers);
  res.end(body);
}

module.exports = { send };
