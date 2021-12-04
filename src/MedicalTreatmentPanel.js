import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function MedicalTreatmentPanel(){
  const [items, setItems]= React.useState([]);
  const [treatId, setTreatId] = React.useState('');
  
  const [treatCourseId, setCourseId]=React.useState('');
  
  const [type, setType]=React.useState('');
  
  const [category, setCategory]=React.useState('');
  
  const [name, setName]=React.useState('');
  
  const [startDate, setStartDate]=React.useState('');
  
  const OnChangeHandler =()=>{ 
    setItems([...items,[treatId," " + treatCourseId, " " + type, " " +  category, " " + name," " + startDate]]);}

  return (
    <div class="mydiv">
  <h1 class="myHeader">

    Medical Treatment Panel</h1>    


  <div class="mydiv">
    <label class="lbl">Treat ID</label> 
    <input class="form-control" placeholder="treatId"   value={treatId} onChange = {e => setTreatId(e.target.value)}></input>
  </div>

  <div class="mydiv">
    <label class="lbl">Treat Course ID</label>
    <input class="form-control" placeholder="treatCourseId"  value={treatCourseId} onChange = {e => setCourseId(e.target.value)}></input>
  </div>

  <div class="mydiv">
  <label class="lbl">Type</label>
  <input class="form-control" placeholder="type"   value={type} onChange = {e => setType(e.target.value)}></input>
  </div>

  <div class="mydiv">
  <label class="lbl">Category</label>  
  <input class="form-control" placeholder="category"   value={category} onChange = {e => setCategory(e.target.value)}></input>
  </div>

  <div class="mydiv">
  <label class="lbl">Name</label>
  <input class="form-control"placeholder="name"   value={name} onChange = {e => setName(e.target.value)}></input>
  </div>
  
  <div class="mydiv">
  <label class="lbl">start Date</label>
  <input class="form-control" placeholder="startDate"  value={startDate} type="date" onChange = {e => setStartDate(e.target.value)}></input>
  </div>

  <div class="mydiv">
      <button class="form-control btn-outline-primary" onClick={OnChangeHandler}> SHOW </button>
      <br/>
      <div>
        {items.map((entry)=><li>{entry+"."}</li>)}   
      </div>
  </div>
    </div>
  );

}
export default MedicalTreatmentPanel;