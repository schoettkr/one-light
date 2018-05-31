const colorSettings = require("./atom-ts-theme").jsonColors;
const colorSettingsString = JSON.stringify(colorSettings);
const distinctColors = {};

for (let i = 0; i < colorSettingsString.length; i++) {
  let currChar = colorSettingsString[i];
  let hexSeq;

  if (currChar === "#") {
    hexSeq = currChar + colorSettingsString.substr(i+1, 6);
    if (!distinctColors[hexSeq]) {
      distinctColors[hexSeq] = true;
    }
    i += 6;
  }
}

console.log(Object.keys(distinctColors));
console.log(Object.keys(distinctColors).length);

