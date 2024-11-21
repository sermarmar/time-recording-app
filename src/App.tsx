import { useEffect } from 'react'
import './App.css'
import { GetTimeEntryUseCase } from './core/useCases/GetTimeEntryUseCase';
import { RegisterPage } from './app/pages/RegisterPage';

function App() {

  useEffect(() => {
    GetTimeEntryUseCase.findAll();
  }, []);
  

  return (
    <>
      <RegisterPage />
    </>
  )
}

export default App
