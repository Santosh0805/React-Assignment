import './App.css'
import CustomFormSubmission from './components/CustomFormSubmission'
import RealTimeValidationForm from './components/RealTimeInputValidation'
import DynamicInputForm from './components/DynamicFormInputFocus'

function App() {
  return (
    <div>
      <DynamicInputForm />
      <RealTimeValidationForm />
      <CustomFormSubmission />
    </div>

  )
}

export default App
