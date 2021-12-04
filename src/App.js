import React from 'react';
import './style.css';
import MedicalTreatmentPanel from './MedicalTreatmentPanel'

export default function App() {

  return (

    
      <div class="container">
	<div class="row">
		<div class="col-md-6 col-md-offset-3">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 class="panel-title">Panel title</h3>
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
                    <div class="tab-pane fade" id="tab1">hello</div>
                        <div class="tab-pane active" id="tab2">
                          <MedicalTreatmentPanel/></div>
                        <div class="tab-pane fade" id="tab3">Hello</div>
                        </div>
                </div>
            </div>
        </div>
	</div>
</div>
    
  );
}
