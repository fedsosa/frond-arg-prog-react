import {RouterProvider } from "react-router-dom";
import {Plantilla} from './layouts/plantillas.jsx';
import { AutentProvider } from "./context/autentContex.jsx";

import {rutas} from './routes';



const App=() =>{
  
  return (
    <AutentProvider>
    < Plantilla>
       <RouterProvider router={rutas} />
    </Plantilla>
    </AutentProvider>
  )
}

export default App
