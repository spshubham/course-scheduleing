/**
 * 
 * @param {*} data 
 * @returns allotment confirm
 */

const confirmAllotment = (data) => {//console.log(data);
  let [courseOfferingId] = data;
  courseOfferingId = courseOfferingId.replace(/(\r\n|\n|\r)/gm, "");
  const courseOfferingDetails = global.db.courses.get(courseOfferingId);
  //console.log("courseOfferingId",courseOfferingDetails, courseOfferingId);
  if (!courseOfferingId || !courseOfferingDetails) {
    console.log("INPUT_DATA_ERROR12121212");
    return;
  }
  courseOfferingDetails.status = "CONFIRMED";
 // console.log(1717, courseOfferingId,global.db);
  const { registrations, minEmpCount } = courseOfferingDetails;

  if (registrations.size < minEmpCount) {
    courseOfferingDetails.status = "COURSE_CANCELED";
  }
  
  for(let [key] of registrations){
    global.db.registrations.set(key,{...global.db.registrations.get(key),status:"CONFIRMED"})
  }
  const { courseName, instructor, startDate, status } = courseOfferingDetails;

  new Map([...registrations.entries()].sort()).forEach((emp, courseRegistrationId) => {
   
   
    console.log(courseRegistrationId, emp.email, courseOfferingId, courseName, instructor, startDate, status);
  });
 //console.log(global.db);
  return;
};


module.exports = confirmAllotment;
