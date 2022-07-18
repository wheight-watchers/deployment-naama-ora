const UserService = require('./user.service');

test('user with id 1 to be 1', () => {
  expect(UserService.getUser("1")).toBe(1);
});
// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
// describe("Calculator tests", () => {
    // test('adding 1 + 2 should return 3', () => {
    //   expect(mathOperations.sum(1, 2)).toBe(3);
    // });
//    })