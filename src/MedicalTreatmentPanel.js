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
  
  const [StartDate, setStartDate]=React.useState('');
  
  const OnChangeHandler =()=>{ 
    setItems([...items,[treatId," " + treatCourseId, " " + type, " " +  category, " " + name," " + StartDate]]);
    }

  return (
    <div class="mydiv">
<form class="form-horizontal">

  <h1 class="myHeader">
    <img src="https://media.istockphoto.com/vectors/red-cross-hospital-isolated-sign-on-white-background-medicine-or-vector-id1151673977?k=20&m=1151673977&s=170667a&w=0&h=o_UcWmO1qRVNf5pUUTL1BhxTqMoms2-uZajmpUfi0wM=" alt="logo" class="img1"/>
    Medical Treatment Panel</h1>    



  <label class="lbl">Treat ID</label>  
  <input placeholder="treatId"  class="form-control" value={treatId} onChange = {e => setTreatId(e.target.value)}></input>

  <label class="lbl">Treat Course ID</label>  
  <input placeholder="treatCourseId" class="form-control" value={treatCourseId} onChange = {e => setCourseId(e.target.value)}></input>

  <label class="lbl">Type</label>  
  <input placeholder="type"  class="form-control" value={type} onChange = {e => setType(e.target.value)}></input>

  <label class="lbl">Category</label>  
  <input placeholder="category"  class="form-control" value={category} onChange = {e => setCategory(e.target.value)}></input>

  <label class="lbl">Name</label>  
  <input placeholder="name"   class="form-control" value={name} onChange = {e => setName(e.target.value)}></input>

  <label class="lbl">start Date</label>  
  <input placeholder="type"  class="form-control" value={StartDate} type="date" onChange = {e => setStartDate(e.target.value)}></input>
  
   <br/>
      <button onClick={OnChangeHandler} class="btn btn-primary"> SHOW </button>
      <br/>
      <div>
        {items.map((entry)=><li>{e+"."}</li>)}   
      </div>
  
      </form>
    </div>
  );

}
export default MedicalTreatmentPanel;