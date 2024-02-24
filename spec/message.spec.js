const Message = require('../message.js'); //import classes
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() { //tests below

      it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
        expect(function() { new Message(); }).toThrow(new Error('Name required.')); //checks if valid
      });
    
      it("constructor sets name", function() {
        let name = 'testMessage'; //define
        let message = new Message(name); //new instance
        expect(message.name).toBe(name); //check if valid
      });
    
      it("contains a commands array passed into the constructor as the 2nd argument", function() {
        let name = 'testMessage'; //define 
        let commands = ['command1', 'command2']; //define
        let message = new Message(name, commands); //new instance
        expect(message.commands).toEqual(commands); //check if vallid
      });

});
