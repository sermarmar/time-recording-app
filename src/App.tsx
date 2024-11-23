import { useEffect } from 'react'
import './App.css'
import { GetTimeEntryUseCase } from './core/useCases/GetTimeEntryUseCase';
import { RouterProvider } from './app/routes/RouteProvider';

function App() {

  useEffect(() => {
    GetTimeEntryUseCase.findAll();
  }, []);
  

  return (
    <>
      <RouterProvider />
    </>
  )
}

export default App
