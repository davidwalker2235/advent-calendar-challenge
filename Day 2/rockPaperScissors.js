const fs = require('fs');
const assets = {
    "A": 1,
    "B": 2,
    "C": 3,
    "X": 1,
    "Y": 2,
    "Z": 3
}
const players = {
    "opponent": 0,
    "me": 1
}

fs.readFile('./strategyData.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    firstPart(data);
    secondPart(data)
  }
);

const firstPart = (data) => {
    let counter = 0;
    data.match(/[^\r\n]+/g).map((element) => {
        const choice = element.split(" ");
        switch ((assets[choice[players.opponent]] - assets[choice[players.me]])) {
            case -1: case 2:
                counter += assets[choice[players.me]] + 6;
                break;
            case 1: case -2:
                counter += assets[choice[players.me]];
                break;
            default:
                counter += assets[choice[players.me]] + 3;
                break;
        }
    });
    console.log("First part answer: " + counter);
}

const secondPart = (data) => {
    let counter = 0;
    data.match(/[^\r\n]+/g).map((element) => {
        const choice = element.split(" ");
        const winnerValue = assets[choice[players.opponent]] !== assets.C ? assets[choice[players.opponent]] + 1 : assets.A
        const loserValue = assets[choice[players.opponent]] !== assets.A ? assets[choice[players.opponent]] - 1 : assets.C
        switch (assets[choice[players.me]]) {
            case 3:
                counter += winnerValue + 6;
                break;
            case 1:
                counter += loserValue;
                break;
            default:
                counter += assets[choice[players.opponent]] + 3;
                break;
        }
    });
    console.log("Second part answer: " + counter);
}
