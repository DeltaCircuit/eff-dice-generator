# eff-dice-generator

Create strong passphrases using eff.org suggested wordlists.

## Installation

```javascript
npm install eff-dice-generator  
```

or

```javascript
yarn add eff-dice-generator
```

## Usage

```javascript
const generatePassphrase = require("eff-dice-generator");

const passPhrase = generatePassphrase(5);

console.log(passPhrase);
```

### generatePassphrase (no_of_dice, is_short)

* no_of_dice: The no. of dice you want to use. Either 4 / 5
* is*short: Use the short wordlist. (Applicable for only \_4 dice roll*)  

Footnote: Since this package contains the entire wordlist, when importing, use **code splitting** to avoid large bundle sizes.
