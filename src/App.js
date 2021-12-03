import React from 'react';
import './style.css';
import MedicalTreatment from './MedicalTreatment';

export default function App() {
  return (
    <div>
      <MedicalTreatment
        patientName="John"
        treatId="123"
        treatCourseId="345"
        type="m"
        category="ill"
        startDate={Date()}
      />
    </div>
  );
}
