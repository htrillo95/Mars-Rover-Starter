const Command = require('../command.js'); //import command class

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() { //tests below

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.')); //throws error if commandtype not found
  });

  });

  it("constructor sets command type", function(){ //sets type
    let commandType = 'testCommand'; //defines
    let command = new Command(commandType); //create new instance
    expect(command.commandType).toBe(commandType); //checks if valid
  });

  it("constructor sets a value passed in as the 2nd argument", function() {
    let commandType = 'testCommand'; //defines type & value below
    let value = 42; // Example value
    let command = new Command(commandType, value);//new instance
    expect(command.value).toBe(value); //checks if valid

  });