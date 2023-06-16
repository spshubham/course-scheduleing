const addCourse = require('./handlers/addCourseHandler');
const courseAlloted = require('./handlers/allotCourseHandler');
const registerCourse = require('./handlers/registrationHandler');
const removeCourse = require("./handlers/cancelationHandler")
const assert =require('assert');

global.db = {
    courses: new Map(),
    registrations: new Map(),
  };

 
 describe( " Course register test", () => {
    beforeEach(() => {
      console.log( "executes before every test" );
    });
      
    it("should add course", () => {
       const temp=  addCourse(['JAVA','SP' , '2444' , 1 ,3]
       )
       assert.equal(temp,undefined);
    });
    
    it("should  register course", () => {
        const reg =  registerCourse(['SP@GMAIL.COM', 'OFFERING-JAVA-SP'])
        assert.equal(reg,undefined);
     });

     it("should one course allocate", () => {
        const reg1 =  courseAlloted(['OFFERING-JAVA-JAMES'])
        assert.equal(reg1,undefined);
     });
     
     
  });