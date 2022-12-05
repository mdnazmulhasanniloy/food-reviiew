import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={Router}></RouterProvider>
    <Toaster />

    </div>
  );
}

export default App;
