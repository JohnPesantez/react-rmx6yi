import React from "react";
import "./style.css";
import MedicalTreatment from './MedicalTreatment';
import MedicalTreatmentList from './MedicalTreatmentList';
import MedicalTreatmentPanel from './MedicalTreatmentPanel';



export default function App() {
  const MedicalTreatList = [
    {
     treatId:"1", 
      patientName:"John",
      treatCourseId:"345",
      type:"m",
      category:"ill",
      startDate:"12/12/2021"
    },
    { 
      treatId:"2",
      patientName:"Timmy",treatCourseId:"567",type:"m",category:"sore throat",startDate:"12/12/2021"
    },
    { 
      treatId:"3",
      patientName:"Sara",treatCourseId:"891",type:"f",category:"headache",startDate:"12/10/2021"
    },
    { 
      treatId:"3",
      patientName:"Sara",treatCourseId:"324",type:"m",category:"broken arm",startDate:"13/12/2021"
    },
    { 
      treatId:"3",
      patientName:"Sara",treatCourseId:"891",type:"f",category:"broken leg",startDate:"15/12/2021"
    }];
    const someJsonRecord = JSON.stringify(MedicalTreatList);
  return (


    <div class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#tab1">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#tab2">Menu 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#tab3">Menu 2</a>
      </li>
    </ul>
  

    <div class="tab-content">
      <div id="tab1" class="container tab-pane active"><br></br>
  
      <MedicalTreatment patientName = "John" treatId = "123"  treatCourseId = "345" type= "m" category = "ill" startDate = {Date()}/>
  
  
      </div>
      <div id="tab2" class="container tab-pane fade"><br></br>
      <MedicalTreatmentList patientJson={someJsonRecord}/>
  
  
  
      </div>
      <div id="tab3" class="container tab-pane fade"><br></br>
  
      <MedicalTreatmentPanel/>
     
  
  
  
      </div>
    </div>
    </div>
  
  );
}
