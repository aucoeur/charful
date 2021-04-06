# be charful ok
[![NPM version](https://img.shields.io/npm/v/@okayauco/charful.svg?style=flat&color=eaff00)](https://www.npmjs.com/package/@okayauco/charful) 
![GitHub last commit](https://img.shields.io/github/last-commit/aucoeur/charful?style=flat)
[![NPM downloads](https://img.shields.io/npm/dt/@okayauco/charful.svg?style=flat)](https://npmjs.org/package/@okayauco/charful)  

charful is a baby string utility library that's trying to be careful  
*(char like character, not burnt to a crisp)* 🤓  

# Usage
```js
import Charful from 'charful';

const char = new Charful();
const snek = char.snakeCase('danger noodle')

console.log(snek) 
// returns `danger_noodle`

```

## Resources
- https://sugarjs.com/extending/
- https://humanwhocodes.com/blog/2010/03/02/maintainable-javascript-dont-modify-objects-you-down-own/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
