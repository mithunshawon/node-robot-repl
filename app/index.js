'use strict'

const Robot = require('./robot.js'),
    {
        INVALID_COMMAND
    } = require('./constants.js'),
    readline = require('readline');

const robot = new Robot(0, 0, '', false);


var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('>> ');
rl.prompt();
rl.on('line', line => {
    initProcess(line, robot);
    rl.prompt();
}).on('close', () => {
    process.exit(0);
});

function initProcess(input, robot) {
    let tokenizedInput = input.split(' ');
    try {
        switch (tokenizedInput[0].toUpperCase()) {
            case 'PLACE':
                robot.place(input);
                break;
            case 'MOVE':
                robot.move();
                break;
            case 'LEFT':
            case 'RIGHT':
                robot.rotate(tokenizedInput[0]);
                break;
            case 'REPORT':
                robot.report();
                break;
            case 'EXIT':
                rl.close();
            default:
                console.log(INVALID_COMMAND);
                break;
        }

    } catch (ex) {
        console.log(`An error occured: ${ex}`);
    }
}

module.exports = {
    initProcess: initProcess
}