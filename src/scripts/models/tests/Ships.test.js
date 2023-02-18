import { Ship } from "../Ship";

test("Ship after 1 hit", () => {
  expect(Ship(5).hits).toEqual(1);
});

test("Ship is sunk after 5 hts", () => {
  expect(Ship(5).hit().hit().hit().hit().hit().isSunk().sunk).toEqual(true);
});
