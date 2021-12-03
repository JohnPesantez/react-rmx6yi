import React from "react";
import "./style.css";
function MedicalTreatment (prop) {
  return( 
  <div>
    {"PatientName : " + prop.patientName + ", treatId : " + prop.treatId + ", treatCourseId ="+ prop.treatCourseId + ", type : " + prop.type + ", category =" + prop.category+", startDate : "+ prop.startDate }
  </div>
   );  
}
export default MedicalTreatment;