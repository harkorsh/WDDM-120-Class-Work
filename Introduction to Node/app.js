const fs = require("fs");
const quoteLib = require("./lib/quotes");
const mathLib = require("./lib/math");

const app = {};

app.config = {
  intervalTime: process.argv[2] ? process.argv[2] : 1000,
};

app.printAQuote = function () {
  const allQuotes = quoteLib.allQuotes();
  const numOfQuotes = allQuotes.length;
  const randomNumber = mathLib.getRandomNumber(1, numOfQuotes);
  console.log("q:", allQuotes[randomNumber - 1]);
};

app.init = function () {
  fs.appendFile(
    __dirname + "/logs/log.txt",
    new Date() + " => " + app.config.intervalTime + "\r\n",
    function (err) {
      if (err) console.log("err", err);
      console.log("File updated!");
    }
  );
  setInterval(app.printAQuote, app.config.intervalTime);
};

app.init();
