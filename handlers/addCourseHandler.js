
/**
 * 
 * @param {*} data 
 * @adds the course
 */
const addCourseOffering = (data) => {
  //console.log(data);
  const [courseName, prerequisite, instructor, startDate, minEmpCount, maxEmpCount] = data;
  
  if (!courseName || !prerequisite || !instructor || !startDate || !minEmpCount || !maxEmpCount) {
    console.log("INPUT_DATA_ERROR");
    return;
  }
  const courseOfferingId = `OFFERING-${courseName}-${instructor}`;
  //console.log("", courseOfferingId);
  global.db.courses.set(courseOfferingId, {
    courseName,
    instructor,
    startDate,
    date: new Date(`${startDate.slice(2, 4)}-${startDate.slice(0, 2)}-${startDate.slice(4)}`),
    minEmpCount,
    maxEmpCount,
    registrations: new Map(),
    status: "AVAILABLE",
    prerequisite
  });
  //console.log(global.db.courses); 
  console.log(courseOfferingId);
  return;
};

module.exports = addCourseOffering;
