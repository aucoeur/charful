class Charful {
  constructor(str) {
    this.str = str
  }

  /**
   * capitalize(str) - makes the first character of a given string uppercase.
   * @param  {string} str - the string to capitalize
   * @return {string} hello world -> Hello world
   */
  capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
  }

  /**
   * allCaps(str) - makes all characters uppercase. (same as str.toUpperCase())
   * @param  {string} str
   * @return {string} Example: foo bar -> FOO BAR
   */
  allCaps(str) {
    return str.toUpperCase()
  }
  /**
   * shout(str) - makes all characters uppercase. (same as str.toUpperCase())
   * @param  {string} str
   * @return {string} Example: foo bar -> FOO BAR
   */
  shout(str) {
    return str.toUpperCase()
  }

  /**
   * capitalizeWords(str) - makes the first character of each word uppercase.
   * @param  {string} str
   * @return {string} Example: do all the things -> Do All The Things
   */
  capitalizeWords(str) {
    const strSplit = str.split(' ')
    return strSplit.map((word) => this.capitalize(word)).join(' ')
  }

  /**
   * removeExtraSpaces(str) - Removes all spaces from the beginning
   * and end of a String along with any extra spaces in the middle.
   * If more than one space appears in the middle of a string it is
   * replaced by a single space.
   * @param  {string} str
   * @return {string} Example: "     Hello    small \n world!   " -> "Hello small world"
   */
  removeExtraSpaces(str) {
    // return str.replace(/\s+/g, ' ').replace(/[\s\t+\n+]/g, '')
    return str.split(' ').filter(c => c.match(/\w+/g)).join(' ')
  }



  /**
   * kebabCase(str) - Removes extra spaces and replaces spaces
   * with the hyphen "-", and makes all characters lowercase.
   * @param {string} str
   * @return {string} Example: "Hello World!" -> "hello-world"
   * (notice the ! is removed)
   */
  kebabCase(str, sep = '-') {
    const lower = str.replace(/[\!+\?+\.+]/g, '').toLowerCase().split(' ')
    return `${lower.join('-')}`
  }


  /**
   * snakeCase(str) - Removes extra space and replaces spaces with
   *  an underscore "_", and makes all characters lowercase.
   * @param {string} str
   * @return {string} Example:" what the heck " -> "what_the_heck"
   */
  snakeCase(str) {
    const lower = str.toLowerCase().split(' ')
    return `${lower.join('_')}`
  }


  /**
   * camelCase(str) - Lowercases the first character of the first word.
   * then uppercases the first character of all other words, and removes
   * all spaces.
   * @param {string} str
   * @return {string} Example: Camel Case -> camelCase
   */
  camelCase(str) {
    const lower = str.toLowerCase().split(' ')
    const formatFirstChars = lower.slice(1).map((word) => this.capitalize(word))
    return `${lower[0].toLowerCase()}${formatFirstChars.join('')}`
  }


  /**
   * shift(str) this method will take the first character of a string
   * and move to the end of a string:
   * @param {string} str
   * @return {string} Example: Hello World -> ello WorldH
   */
  shift(str, num) {
    return str.slice(num) + str.slice(0, num)
  }

  /**
   * makeHashTag(str) - This should convert the given string to a hash tag.
   * A hash tag begins with # and no spaces. Each word in the phrase begins
   * with an uppercase letter.
   * If the given string has more than three words pick the three longest
   * and make the hash tag from those.
   * @param {string} str
   * @return {array} Example: "Amazing bongo drums for sale" -> ['#amazing', '#bongo', '#drums']
   */
  makeHashTag(str) {
    const list = str.split(' ')
    list.sort((a, b) => b.length - a.length) // Longest length first
    return list.slice(0, 3).map(word => `#${this.capitalize(word)}`)
  }

  /**
   * isEmpty(str) - Returns true if the given string is empty or contains
   * only whitespace. White space includes: spaces, line returns, and tabs.
   *  These characters can be represented with: \n (new line) \r (carriage
   * return), \t (tab).
   * @param {string} str
   * @returns {boolean} Example: "Abc def" -> false
   */
  isEmpty(str) {
    // .test() returns true if regex match..
    // note: returning false if true might be kind of janky.. maybe reconsider
    return (/^(\w+\S+)$/).test(str) ? false : true
  }
}

export default Charful;
