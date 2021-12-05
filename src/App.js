import React from 'react';
import './style.css';
import MedicalTreatment from 'MedicalTreament';
import MedicalTreatmentPanel from './MedicalTreatmentPanel'
import "//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js";
import "//code.jquery.com/jquery-1.11.1.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {

  return (

    
      <div class="container">
	<div class="row">
		<div class="col-md-6 col-md-offset-3">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 class="panel-title">Assignment 1</h3>
                    <span class="pull-right">
                        
                        <ul class="nav panel-tabs">
                            <li class="active"><a href="#tab1" data-toggle="tab">Tab 1</a></li>
                            <li><a href="#tab2" data-toggle="tab">Tab 2</a></li>
                            <li><a href="#tab3" data-toggle="tab">Tab 3</a></li>
                        </ul>
                    </span>
                </div>
                <div class="panel-body">
                    <div class="tab-content">
                    <div class="tab-pane active" id="tab1"> <MedicalTreatment patientName = "John" treatId = "123"  treatCourseId = "345" type= "m" category = "ill" startDate = {Date()}/>  </div>
                        <div class="tab-pane" id="tab2">
                          <MedicalTreatmentPanel/></div>
                        <div class="tab-pane" id="tab3">Hello</div>
                        </div>
                </div>
            </div>
        </div>
	</div>
</div>
    
  );
}
