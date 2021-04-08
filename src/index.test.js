import Charful from './index'


test('Sanity Check', () => {
  expect(3*3).toEqual(9)
})

test('capitalize', () => {
  const char = new Charful()
  expect(char.capitalize('boopbeep')).toBe('Boopbeep')
})

test('shout', () => {
  const char = new Charful()
  expect(char.shout('hi hello')).toBe('HI HELLO')
  expect(char.allCaps('very excited')).toBe('VERY EXCITED')
})
