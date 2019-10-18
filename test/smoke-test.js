const assert = require('assert');
const nodeCoz = require('../index.js');

// Has exports.
assert(nodeCoz.cozProgress);
assert(nodeCoz.cozProgressNamed);
assert(nodeCoz.cozBegin);
assert(nodeCoz.cozEnd);

// Can call them and they return undefined.
const { cozProgress, cozProgressNamed, cozBegin, cozEnd } = nodeCoz;
assert(cozProgress() == undefined);
assert(cozProgressNamed('name') == undefined);
assert(cozBegin('name') == undefined);
assert(cozEnd('name') == undefined);

// Throw on wrong args.
assert.throws(() => cozProgress('name'));
assert.throws(() => cozProgressNamed());
assert.throws(() => cozProgressNamed(1));
assert.throws(() => cozProgressNamed('name', 1));
assert.throws(() => cozBegin());
assert.throws(() => cozBegin(1));
assert.throws(() => cozBegin('name', 1));
assert.throws(() => cozEnd());
assert.throws(() => cozEnd(1));
assert.throws(() => cozEnd('name', 1));
