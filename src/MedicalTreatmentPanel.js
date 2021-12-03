import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
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
<form class="form-horizontal">

  <h1 class="myHeader">

    Medical Treatment Panel</h1>    



  <label class="lbl">Treat ID</label>  
  <input placeholder="treatId"   value={treatId} onChange = {e => setTreatId(e.target.value)}></input>

  <label class="lbl">Treat Course ID</label>  
  <input placeholder="treatCourseId"  value={treatCourseId} onChange = {e => setCourseId(e.target.value)}></input>

  <label class="lbl">Type</label>  
  <input placeholder="type"   value={type} onChange = {e => setType(e.target.value)}></input>

  <label class="lbl">Category</label>  
  <input placeholder="category"   value={category} onChange = {e => setCategory(e.target.value)}></input>

  <label class="lbl">Name</label>  
  <input placeholder="name"   value={name} onChange = {e => setName(e.target.value)}></input>

  <label class="lbl">start Date</label>  
  <input placeholder="startDate"  value={startDate}  onChange = {e => setStartDate(e.target.value)}></input>
  
   <br/>
      <button onClick={OnChangeHandler}> SHOW </button>
      <br/>
      <div>
        {items.map((entry)=><li>{entry+"."}</li>)}   
      </div>
  
      </form>
    </div>
  );

}
export default MedicalTreatmentPanel;