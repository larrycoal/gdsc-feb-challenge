const quad = require("./Index");

test("Check quad", () => {
  expect(quad([7, 6, 4, -1, 1, 2], 16)).toMatchObject([
    [1, 2, 6, 7],
    [-1, 4, 6, 7],
  ]);
});
