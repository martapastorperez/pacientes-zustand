import { usePatientStore } from "../store"

export const PatientList = () => {
    const {patients}=usePatientStore()
    console.log(patients);
    
  return (
    <div>PatientList</div>
  )
}
