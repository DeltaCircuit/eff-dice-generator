function generatePassphrase(dice_no, is_short) {
  if (dice_no < 4 || dice_no > 5) {
    throw new Error("Invalid dice numbers. Must be 4 or 5");
  }
  const keyArray = Array(dice_no)
    .fill(1)
    .map(() =>
      Array(dice_no)
        .fill(1)
        .map(() => Math.floor(Math.random() * (6 - 5 + 1)) + 1)
        .join("")
    );
  if (dice_no === 4) {
    if (is_short) {
      const keys = require("./four-dice-short").four_dice_short;
      const passPhrase = keyArray.reduce(
        (acl, curr) => `${acl}${keys[curr]}`,
        ""
      );
      return passPhrase;
    }
    const keys = require("./four-dice").four_dice;
    const passPhrase = keyArray.reduce(
      (acl, curr) => `${acl}${keys[curr]}`,
      ""
    );
    return passPhrase;
  } else if (dice_no === 5) {
    const keys = require("./five-dice").five_dice;
    const passPhrase = keyArray.reduce(
      (acl, curr) => `${acl}${keys[curr]}`,
      ""
    );
    return passPhrase;
  }
}

module.exports = generatePassphrase;
