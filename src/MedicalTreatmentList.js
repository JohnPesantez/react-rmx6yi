import React from 'react';
import "./style.css";

function MedicalTreatmentList(props){
  const patientrecords =props.patientJson; 
  const patients = JSON.parse(patientrecords);
  const [incategory, setInCategory]=React.useState('');
  const  listpatientJSON = patients.map((Patient)=>
  <li key={Patient.treatId}>
    {Patient.treatId},  
    {Patient.patientName},  
    {Patient.treatCourseId}, 
    {Patient.type},
    {Patient.category},
    {Patient.startDate}
   </li>);
   const listPatientCategoryJSON = patients.filter(Patient=> Patient.category).map(PatientFiltered=>(<li>{PatientFiltered.category}</li>));  
  
    const listPatientByCat= patients.filter(Patient=>Patient.category==incategory).map(Pfiltered=>(
    <li>
      {Pfiltered.treatId},  
      {Pfiltered.patientName},  
      {Pfiltered.treatCourseId}, 
      {Pfiltered.type},
      {Pfiltered.category},
      {Pfiltered.startDate}
    </li>));
    
return (
    <div class="mydiv">
      <h1>Medical Treatment List are:</h1>
      {listpatientJSON}  
      <br/><br/>
      <h4>Medical Treatment List by categories</h4>
      <label class="lbl">Search patient by category</label>
      <input class="form-control" type="text" placeholder="search patient by a category" value={incategory} onChange={(e)=> setInCategory(e.target.value)}/>
      {listPatientByCat}    
    </div>
    
  );

}
export default MedicalTreatmentList;