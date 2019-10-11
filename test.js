assert = require('assert');

assert(process.env.DB_PASS.length > 9);
assert(process.env.DB_PASS[1] === 'e');
assert(process.env.DB_USER.length > 5);
assert(process.env.DB_HOST.length > 5);
