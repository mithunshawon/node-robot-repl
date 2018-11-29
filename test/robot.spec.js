 const Robot = require("../app/robot.js");

 describe("Robot Class", () => {

     let testRobot;

     beforeEach(() => {
         testRobot = new Robot(0, 0, '', false);
     });

     describe("Place position test", () => {
         it("should check the point is valid", () => {
             testRobot.place('Place 1,2,EAST');
             let currentPos = testRobot.getCurrentPosition();

             expect(currentPos).toEqual({
                 x: 1,
                 y: 2,
                 direction: 'EAST'
             });
         });
     });

     describe("Move position test", () => {
        it("should move the robot one unit forward", () => {
            testRobot.place('Place 1,2,EAST');
            testRobot.move();
            let currentPos = testRobot.getCurrentPosition();

            expect(currentPos).toEqual({
                x: 2,
                y: 2,
                direction: 'EAST'
            });
        });
    });


     describe("Rotate direction test", () => {

         it("should change the direction to left", () => {
             testRobot.place('Place 1,2,EAST');
             testRobot.rotate('LEFT');
             let {
                 direction
             } = testRobot.getCurrentPosition();

             expect(direction).toEqual('NORTH');
         });

         it("should change the direction to right", () => {
             testRobot.place('Place 0,0,NORTH');
             testRobot.rotate('RIGHT');
             let {
                 direction
             } = testRobot.getCurrentPosition();

             expect(direction).toEqual('EAST');
         });
     });

 });