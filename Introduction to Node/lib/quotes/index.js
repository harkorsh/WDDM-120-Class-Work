const fs = require("fs");
const quotes = {};

quotes.allQuotes = function () {
  const fileContent = fs.readFileSync(__dirname + "/quotes.txt", `utf8`);
  const arrayOfQuotes = fileContent.split(/\r?\n/);
  return arrayOfQuotes;
};

module.exports = quotes;
