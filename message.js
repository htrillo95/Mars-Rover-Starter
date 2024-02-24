class Message { //define message class
   // Write code here!
   constructor(name, commands) { //checks for name
      this.name = name;
      if (!name) {
        throw Error("Name required."); //throws error for invalid name
      }
      this.commands = commands || [];
    }
}

module.exports = Message; //export for calling