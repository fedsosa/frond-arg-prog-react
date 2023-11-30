import {RouterProvider } from "react-router-dom";
import {Plantilla} from './layouts/plantillas.jsx';


import {rutas} from './routes';



const App=() =>{
  
  return (
    < Plantilla>
       <RouterProvider router={rutas} />
    </Plantilla>
  )
}

export default App
