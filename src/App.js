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
    <div>
      <div class="tab">
      <button class="tablinks" onclick="openCity(event, 'London')">task1</button>
      <button class="tablinks" onclick="openCity(event, 'Paris')">task2</button>
      <button class="tablinks" onclick="openCity(event, 'Tokyo')">task3</button>
      </div>
      <MedicalTreatment patientName = "John" treatId = "123"  treatCourseId = "345" type= "m" category = "ill" startDate = {Date()}/>
      <MedicalTreatmentList patientJson={someJsonRecord}/>
      <MedicalTreatmentPanel/>
      <script>
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>
   
    </div>
  );
}
