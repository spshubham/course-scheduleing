/**
 *
 * @param {*} data
 * @returns register employee
 */

const registerEmployee = (data) => {
  let [email, courseOfferingId] = data;
  courseOfferingId = courseOfferingId.replace(/(\r\n|\n|\r)/gm, "");

  const courseOfferingDetails = global.db.courses.get(courseOfferingId);

  if (!email || !courseOfferingId || !courseOfferingDetails) {
    console.log("INPUT_DATA_ERROR  rrr");
    return;
  }

  const { courseName, date, registrations, maxEmpCount, status } =
    courseOfferingDetails;

  const empName = email.split("@")[0];
  const courseRegistrationId = `REG-COURSE-${empName}-${courseName}`;
  if (courseName == "DJANGO") {
    let eId = `REG-COURSE-${empName}-PYTHON`;
    let ans = global.db.registrations.get(eId);

    if (ans?.status == "CONFIRMED") {
     

      //   console.log(registrations, registrations.size, maxEmpCount);

      if (registrations.size >= maxEmpCount) {
        console.log("COURSE_FULL_ERROR");
        return;
      }

      if (status === "CANCELED") {
        console.log("COURSE_CANCELED");
        return;
      }

      registrations.set(courseRegistrationId, {
        email,
        status: "ACCEPTED",
      });
      global.db.registrations.set(courseRegistrationId, {
        email,
        courseOfferingId,
        status: "ACCEPTED",
      });

      console.log(courseRegistrationId, "ACCEPTED");
      return;
    } else {
      console.log(courseRegistrationId,"PREREQUISITE_NOT_COMPLETED");
      return;
    }
  } else {
    
    if (registrations.size >= maxEmpCount) {
      console.log("COURSE_FULL_ERROR");
      return;
    }

    if (status === "CANCELED") {
      console.log("COURSE_CANCELED");
      return;
    }

    registrations.set(courseRegistrationId, {
      email,
      status: "ACCEPTED",
    });
    global.db.registrations.set(courseRegistrationId, {
      email,
      courseOfferingId,
      status: "ACCEPTED",
    });

    console.log(courseRegistrationId, "ACCEPTED");
    return;
  }
};

module.exports = registerEmployee;
