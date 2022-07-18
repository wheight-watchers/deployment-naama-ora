const userService = require('./user.service');
const UserService = require('./user.service.test');

test('get all users', () => {
  expect(userService.getUser(1)).toBe(JSON.parse());
});