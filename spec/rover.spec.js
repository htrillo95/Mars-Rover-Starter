const Rover = require('../rover.js'); //import all classes
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() { //tests below

  // 7 tests here!
  it("constructor sets position and default values for mode and generatorWatts", function() {
    let rover = new Rover(98382); //default
    expect(rover.position).toEqual(98382); //set
    expect(rover.mode).toEqual('NORMAL'); //set
    expect(rover.generatorWatts).toEqual(110); //set
  });

  it("response returned by receiveMessage contains the name of the message", function() {
    let rover = new Rover(98382); //default
    let message = new Message('Test message');
    let response = rover.receiveMessage(message); //define
    expect(response.message).toEqual('Test message'); //checks if valid
  });

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let rover = new Rover(98382); //default
    let command1 = new Command('STATUS_CHECK');
    let command2 = new Command('MODE_CHANGE', 'LOW_POWER');
    let message = new Message('Test message', [command1, command2]); //deinfe (2 results in array)
    let response = rover.receiveMessage(message); //call above
    expect(response.results.length).toEqual(2); //check if valid (2)
  });

  it("responds correctly to the status check command", function() {
    let rover = new Rover(98382);
    let message = new Message('Test message', [new Command('STATUS_CHECK')]); //define status-check command
    let response = rover.receiveMessage(message); //call above
    expect(response.results[0].completed).toEqual(true); //check if valid
    expect(response.results[0].roverStatus.mode).toEqual('NORMAL'); //checks for default value
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110); //checks for default value
    expect(response.results[0].roverStatus.position).toEqual(98382); //checks for default value
  });

  it("responds correctly to the mode change command", function() {
    let rover = new Rover(98382);
    let message = new Message('Test message', [new Command('MODE_CHANGE', 'LOW_POWER')]); //define mode-change
    let response = rover.receiveMessage(message); //calls above
    expect(response.results[0].completed).toEqual(true); //checks if valid
    expect(rover.mode).toEqual('LOW_POWER'); 
  });

  it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
    let rover = new Rover(98382);
    rover.mode = 'LOW_POWER'; //low power mode
    let message = new Message('Test message', [new Command('MOVE', 999)]); //test movement
    let response = rover.receiveMessage(message); //calls above
    expect(response.results[0].completed).toEqual(false); //returns false
    expect(rover.position).toEqual(98382);
  });

  it("responds with the position for the move command", function() {
    let rover = new Rover(98382);
    let message = new Message('Test message', [new Command('MOVE', 999)]);
    let response = rover.receiveMessage(message); //calls above
    expect(response.results[0].completed).toEqual(true); //checks if valid
    expect(rover.position).toEqual(999); //updates given position
  });
});
