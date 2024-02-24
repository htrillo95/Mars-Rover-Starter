class Command { //define command class
   constructor(commandType, value) {
     this.commandType = commandType; //checks for commandtype
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
 }
 
 module.exports = Command; //export for calling