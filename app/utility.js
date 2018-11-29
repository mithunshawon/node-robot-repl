extractPosition = inputString => {
    let splittedInput = inputString.split(' ')
    if (splittedInput.length == 2) {
        let positions = splittedInput[1].split(',');
        if (positions.length == 3) {
            let x = parseInt(positions[0]);
            let y = parseInt(positions[1]);
            let dir = positions[2];
            return {
                x: x,
                y: y,
                dir: dir
            };
        }
    }
    return {};
}

isValidPosition = (x, y) => {
    if ((x >= 0 && x <= 4) && (y >= 0 && y <= 4)) {
        return true;
    }
    return false;
}

moveForwardUpward = (value1, value2) => {
    if (isValidPosition(value1 + 1, value2))
        return value1 + 1;

    return value1;
}

moveBackwardDownward = (value1, value2) => {
    if (isValidPosition(value1 - 1, value2))
        return value1 - 1;

    return value1;
}


module.exports = {
    extractPosition: extractPosition,
    isValidPosition: isValidPosition,
    moveForwardUpward: moveForwardUpward,
    moveBackwardDownward: moveBackwardDownward
}