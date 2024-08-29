import Ship from './ship';

test('Ship class is defined', () => {
  const myShip = new Ship();
  expect(myShip).toBeDefined();
});
