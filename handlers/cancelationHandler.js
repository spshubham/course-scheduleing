/**
 * 
 * @param {*} data 
 * @returns cancel registration
 */

const cancelRegistration = (data) => {
  let [courseRegistrationId] = data;
  courseRegistrationId = courseRegistrationId.replace(/(\r\n|\n|\r)/gm, "");
  const registrationDetails = global.db.registrations.get(courseRegistrationId);
  const { courseOfferingId } = registrationDetails;

  const courseOfferingDetails = global.db.courses.get(courseOfferingId);
  const { status, registrations } = courseOfferingDetails;

  if (status === "CONFIRMED" || status === "CANCELED") {
    console.log(courseRegistrationId, "CANCEL_REJECTED");
    return;
  }

  registrations.delete(courseRegistrationId);
  global.db.registrations.delete(courseRegistrationId);

  console.log(courseRegistrationId, "CANCEL_ACCEPTED");
  return;
};

module.exports = cancelRegistration;
