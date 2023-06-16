const fs = require("fs");

const addCourseOffering = require("./handlers/addCourseHandler");
const confirmAllotment = require("./handlers/allotCourseHandler");
const registerEmployee = require("./handlers/registrationHandler");
const cancelRegistration = require("./handlers/cancelationHandler");

const filename = process.argv[2];

global.db = {
  courses: new Map(),
  registrations: new Map(),
};

fs.readFile(filename, { encoding: 'utf8' }, (err, data) => {
  /*if (err) throw err
    var inputLines = data.toString().split("\n")
    // Add your code here to process input commands
    */

  if (err) {
    throw err;
  }
  const inputLines = data.toString().split("\n");
  //   console.log(inputLines);

  inputLines.forEach((line) => {
    const [command, ...input] = line.split(" ");
    // console.log(command, input);

    if (command === "ADD-COURSE-OFFERING") {
      addCourseOffering(input);
    } else if (command === "ALLOT-COURSE" || command === "ALLOT") {
      confirmAllotment(input);
    } else if (command === "REGISTER") {
      registerEmployee(input);
    } else if (command === "CANCEL") {
      cancelRegistration(input);
    }

   // console.log(global.db.registrations);
  });
});
