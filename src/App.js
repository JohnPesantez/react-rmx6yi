import React from 'react';
import './style.css';
import MedicalTreatment from './MedicalTreatment';
import MedicalTreatmentList from './MedicalTreatmentList';
import MedicalTreatmentPanel from './MedicalTreatmentPanel';
import '//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js';
import '//code.jquery.com/jquery-1.11.1.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      patientName:"Sara",treatCourseId:"891",type:"f",category:"broken arm",startDate:"15/12/2021"
    }];
    const someJsonRecord = JSON.stringify(MedicalTreatList);
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title">Assignment 1</h3>
              <span class="pull-right">
                <ul class="nav panel-tabs">
                  <li class="active">
                    <a href="#tab1" data-toggle="tab">
                      Task1
                    </a>
                  </li>
                  <li>
                    <a href="#tab2" data-toggle="tab">
                      Task2
                    </a>
                  </li>
                  <li>
                    <a href="#tab3" data-toggle="tab">
                      Task3
                    </a>
                  </li>
                </ul>
              </span>
            </div>
            <div class="panel-body">
              <div class="tab-content">
                <div class="tab-pane active" id="tab1">
                  {' '}
                  <MedicalTreatment
                    patientName="John"
                    treatId="123"
                    treatCourseId="345"
                    type="m"
                    category="ill"
                    startDate={Date()}
                  />{' '}
                </div>
                <div class="tab-pane" id="tab2">
                    <MedicalTreatmentList patientJson={someJsonRecord}/>
                </div>
                <div class="tab-pane" id="tab3">
                  <MedicalTreatmentPanel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
