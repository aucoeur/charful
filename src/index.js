console.log('hey, be charful ok')

class Charful {
  constructor(str) {
    this.str = str
  }

  // Challenge 1
  // capitalize() - makes the first character of a given string uppercase.
  // Example: hello world -> Hello world
  capitalize(str) {
    // const notFirst =
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
  }

  // console.log(capitalize('fOO'))

  // Challenge 2
  // allCaps() - makes all characters uppercase. (this is the same as str.toUpperCase())
  // Example: foo bar -> FOO BAR
  allCaps(str) {
    return str.toUpperCase()
  }

  shout(str) {
    return str.toUpperCase()
  }

  // console.log(shout('fubar'))

  // Challenge 3
  // capitalizeWords() - makes the first character of each word uppercase. Imagine that each word is separated by a space.
  // Example: do all the things -> Do All The Things

  capitalizeWords(str) {
    const strSplit = str.split(' ')
    return strSplit.map((word) => capitalize(word)).join(' ')
  }

  // console.log(capitalizeWords('hello foo bar world!'))
  // console.log(capitalizeWords('bOOpers'))

  // Challenge 4
  // removeExtraSpaces() - Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space.

  // Advanced: Remove all whitespace characters, this includes return, enter, and tabs along with spaces.
  removeExtraSpaces(str) {
    // return str.replace(/\s+/g, ' ').replace(/[\s\t+\n+]/g, '')
    return str.split(' ').filter(c => c.match(/\w+/g)).join(' ')
  }
  // console.log(removeExtraSpaces("     Hello    small \n world!   "))


  // Challenge 5
  // kebabCase() - Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
  // Example: " Hello world " -> "hello-world"
  // Advanced: Remove special characters from the string. For example: "Hello World!" -> "hello-world" (notice the ! is removed)

  kebabCase(str, sep = '-') {
    const lower = str.replace(/[\!+\?+\.+]/g, '').toLowerCase().split(' ')
    return `${lower.join('-')}`
  }

  // console.log(kebabCase('hello world foo bar!'))

  // Challenge 6
  // snakeCase() - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
  // Example: " what the heck " -> "what_the_heck"

  snakeCase(str) {
    const lower = str.toLowerCase().split(' ')
    return `${lower.join('_')}`
  }
  // console.log(snakeCase('hello under world'))

  // Challenge 7
  // camelCase() - Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
  // Example: Camel Case -> camelCase

  camelCase(str) {
    const lower = str.toLowerCase().split(' ')
    const formatFirstChars = lower.slice(1).map((word) => capitalize(word))
    return `${lower[0].toLowerCase()}${formatFirstChars.join('')}`
  }

  // console.log(camelCase('Hello world domination'))

  // Challenge 8
  // shift() this method will take the first character of a string and move to the end of a string:
  // Example: Hello World -> ello WorldH

  // Strategies: Use String.slice()
  // Advanced: Include an optional second parameter that sets the number of characters to shift.
  // Example: shift('foo bar', 3) -> ' barfoo'
  // These functions should all take a string as input and return a string as output.

  shift(str, num) {
    return str.slice(num) + str.slice(0, num)
  }
  // console.log(shift('Hello World', 1))
  // console.log(shift('foobar', 3))

  // Challenge 9

  // makeHashTag(str) - This should convert the given string to a hash tag. A hash tag begins with # and no spaces. Each word in the phrase begins with an uppercase letter.

  // If the given string has more than three words pick the three longest and make the hash tag from those.

  // Example:
  // input: "Amazing bongo drums for sale"
  // output: ['#amazing', '#bongo', '#drums']
  // Strategies:

  // Split the string into an array of words by splitting on the " ". Check the length. Sort by length. Uppercase each of the first three words and add '#' at the beginning.
  makeHashTag(str) {
    list = str.split(' ')
    list.sort((a, b) => b.length - a.length) // Longest length first
    // console.log(sorted)
    return list.slice(0, 3).map(word => `#${capitalize(word)}`).join('')
  }
  // console.log(makeHashTag("Amazing bongo drums for sale"))

  // Challenge 10

  // isEmpty(str) - Returns true if the given string is empty or contains only whitespace. White space includes: spaces, line returns, and tabs. These characters can be represented with: \n (new line) \r (carrige return), \t (tab).

  // Example:
  // Input: "Abc def"
  // Output: isEmpty("Abc def") // false
  // // Example - notice source string
  // // contains tabs, spaces, and returns

  // Strategies:
  // You can use string.trim() to remove spaces at the beginning and end of the string. What's left is either empty characters like returns, enter or tab, or other characters. Loop over the remaining characters, if you find a character that is not \n, \r, or \t return false. If you got to the end of the loop return true.

  isEmpty(str) {
    // .test() returns true if regex match..
    // note: returning false if true might be kind of janky.. maybe reconsider
    return (/\S/i).test(str) ? false : true
  }

  // const emptyStr = `

  // 		`;
  // console.log(isEmpty(emptyStr)) // true
  // console.log(isEmpty('\t\r\n ')) // true
  // console.log(isEmpty('  h   ')) // false
  // console.log(isEmpty('  \t1   ')) // false

}


// Challenge 11 Adding documentation
// Add a readme.md to your GitHub Repo. In this file you will document your library of string functions.

export default Charful;
