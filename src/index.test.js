import Charful from './index'


const char = new Charful()

test('Sanity Check', () => {
  expect(3*3).toEqual(9)
})

test('capitalize', () => {
  // const char = new Charful()
  expect(char.capitalize('boopbeep')).toBe('Boopbeep')
})

test('shout', () => {
  // const char = new Charful()
  expect(char.shout('hi hello')).toBe('HI HELLO')
  expect(char.allCaps('very excited')).toBe('VERY EXCITED')
})

test('capitalizeWords', () => {
  expect(char.capitalizeWords('these are words')).toBe('These Are Words')
  expect(char.capitalizeWords('MORE WORDS')).toBe('More Words')
})

test('removeExtraSpaces', () => {
  expect(char.removeExtraSpaces('    \t   white space \n')).toBe('white space')
})

test('kebabCase', () => {
  expect(char.kebabCase('yum meat on a stick')).toBe('yum-meat-on-a-stick')
})

test('snakeCase', () => {
  expect(char.snakeCase('danger noodle')).toBe('danger_noodle')
})

test('camelCase', () => {
  expect(char.camelCase('camels stay hydrated')).toBe('camelsStayHydrated')
})

test('shift', () => {
  expect(char.shift('fastforward', 4)).toBe('forwardfast')
})

test('makeHashTag', () => {
  expect(char.makeHashTag('hot takes peanut gallery')).toEqual(['#Gallery', '#Peanut', '#Takes'])
})

test('isEmpty', () => {
  expect(char.isEmpty('alskd')).toBe(false)
  expect(char.isEmpty('\n\t')).toBe(true)
})
