import { useEffect } from 'react'
import './App.css'
import { GetTimeEntryUseCase } from './core/useCases/GetTimeEntryUseCase';

function App() {

  useEffect(() => {
    GetTimeEntryUseCase.findAll();
  }, []);
  

  return (
    <>
      
    </>
  )
}

export default App
