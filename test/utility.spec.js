const {
    extractPosition,
    isValidPosition,
    moveForwardUpward,
    moveBackwardDownward
} = require("../app/utility.js");

describe("Utility", () => {

    verifyTest = (actual, expected) => {
        expect(actual).toEqual(expected);
    }

    describe("Position validition test", () => {
        it("should check point in grid", () => {
            verifyTest(isValidPosition(4, 3), true);
            verifyTest(isValidPosition(0, 0), true);
        });
    });

    describe("Position extraction test", () => {
        it("should return point and direction from input string", () => {
            verifyTest(extractPosition('PLACE 1,2,EAST'), {
                x: 1,
                y: 2,
                dir: 'EAST'
            });
        });
    });

    describe("Movable position test", () => {
        it("should change the x or y value of robot position", () => {
            verifyTest(moveForwardUpward(0, 0), 1);
            verifyTest(moveForwardUpward(4, 5), 4);
            verifyTest(moveBackwardDownward(1, 2), 0);
            verifyTest(moveBackwardDownward(0, 0), 0);
        });

    });
});