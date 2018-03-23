const assert = require('assert');
const app = require('../../../client/src/app');

describe('\'contact\' service', () => {
  it('registered the service', () => {
    const service = app.service('employees'); // change contact to contacts

    assert.ok(service, 'Registered the service');
  });
});