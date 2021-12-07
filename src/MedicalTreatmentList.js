import React from 'react';

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
   const listPatientByCat= patients.filter(Patient=>Patient.category==incategory).map(Pfiltered=>(
    <li>{Pfiltered}</li>));
/*
    const listPatientByCat= patients.filter(Patient=>Patient.category==incategory).map(Pfiltered=>(
    <li>
      {Pfiltered.treatId},  
      {Pfiltered.patientName},  
      {Pfiltered.treatCourseId}, 
      {Pfiltered.type},
      {Pfiltered.category},
      {Pfiltered.startDate}
    </li>));
*/
return (
    <div>
      <h1>Medical Treatment List are:</h1>
      {listpatientJSON}  
      <br/><br/>
      <h2>Medical Treatment List by categories</h2>
      <input type="text" placeholder="search patient by a category" value={incategory} onChange={(e)=> setInCategory(e.target.value)}/>
      {listPatientByCat}    
    </div>
    
  );

}
export default MedicalTreatmentList;