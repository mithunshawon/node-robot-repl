const {initProcess} = require("../app/index.js");
const Robot = require("../app/robot.js");


describe("Index", () => {

    let testRobot = new Robot(0, 0, '', false);

    describe("Process Initialization test", () => {
        it("should start the process", () => {
            
            initProcess('PLACE 1,2,EAST', testRobot);
            initProcess('MOVE', testRobot);
            initProcess('MOVE', testRobot);
            initProcess('LEFT', testRobot);
            initProcess('MOVE', testRobot);
            
            let currentPos = testRobot.getCurrentPosition();

             expect(currentPos).toEqual({
                 x: 3,
                 y: 3,
                 direction: 'NORTH'
             });

        });
    });

});