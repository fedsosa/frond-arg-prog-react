

import {createBrowserRouter, } from "react-router-dom";
// impotar las vistas
import Miportada from './views/portada.jsx'
import Ingresar from './views/ingresar.jsx'
import Registrar from './views/registrarse.jsx'
import Miposteo from './views/Posteos.jsx'
import Eliminar from './views/Eliminar.jsx'

  const rutas = createBrowserRouter([
    {
      path: "/",
      element: <Miportada/>,
    },{
        path: "/Registrar",
        element: <Registrar/>,
       },{
        path: "/ingresar",
        element: <Ingresar/>,
       },{
        path: "/posteo",
        element: <Miposteo/>,
       },{
        path: "/eliminar",
        element: <Eliminar/>,
       },
      
  ]);
    
    export {rutas}

  