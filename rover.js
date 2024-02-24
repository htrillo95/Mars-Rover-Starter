class Rover { //define rover class
   // Write code here!
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL'; //default
      this.generatorWatts = 110; 
  }
  receiveMessage(message) { //method
   let results = [];
   for (const command of message.commands) { //iterate through commands
       let result = {}; //stored in obj
       if (command.commandType === 'STATUS_CHECK') { //check commandtype 
           result.completed = true;
           result.roverStatus = {
               mode: this.mode,
               generatorWatts: this.generatorWatts,
               position: this.position
           };
          } else if (command.commandType === 'MODE_CHANGE') { //next check
            this.mode = command.value;
            result.completed = true;
        } else if (command.commandType === 'MOVE') { //next check
            if (this.mode === 'LOW_POWER') {
                result.completed = false;
            } else {
                this.position = command.value;
                result.completed = true;
            }
        }
        results.push(result); //push to results array
    }
    return { message: message.name, results };
   }
}


module.exports = Rover; //export for calling


    // let rover = new Rover(100);
    // let commands = [
    //    new Command('MOVE', 4321),
    //    new Command('STATUS_CHECK'),
    //    new Command('MODE_CHANGE', 'LOW_POWER'),
    //    new Command('MOVE', 3579),
    //    new Command('STATUS_CHECK')
    // ];
    // let message = new Message('TA power', commands);
    // let response = rover.receiveMessage(message);

    // console.log(rover);
    // console.log(response);