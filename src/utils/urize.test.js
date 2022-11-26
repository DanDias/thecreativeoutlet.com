import urize from "./urize";

test('from multiple strings', () => {
  expect(urize('test','one')).toBe('test/one');
})

test('from array', () => {
  expect(urize(['test','two'])).toBe('test/two');
})

test('with mix of types',() => {
  expect(urize('test','three',['is','complex'])).toBe('test/three/is/complex')
})

test('with an object',() => {
  expect(urize('test','four',{ "test": 0 })).toBe('test/four')
})