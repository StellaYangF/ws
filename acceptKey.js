const crypto = require('crypto');
const CODE = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

function toAcceptKey(websocketKey) {
  return crypto.createHash('sha1').update(websocketKey + CODE).digest('base64');
};

const websocketKey = 'IHfMdf8a0aQXbwQO1pkGdA==';
console.log(toAcceptKey(websocketKey));
// aWAY+V/uyz5ILZEoWuWdxjnlb7E=