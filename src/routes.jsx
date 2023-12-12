

import {createBrowserRouter, } from "react-router-dom";
// impotar las vistas
import Miportada from './views/portadaVista.jsx'
import Ingresar from './views/ingresarVista.jsx'
import Registrar from './views/registrarseVista.jsx'
import Miposteo from './views/PosteosVista.jsx'
import Eliminar from './views/EliminarVista.jsx'
import VerUsuario from './views/verElUsuarioVista.jsx'

  const rutas = createBrowserRouter([
    {
      path: "/",
      element: <Miportada/>,
    },{
        path: "/registrar",
        element: <Registrar/>,
       },{
        path: "/ingresar",
        element: <Ingresar/>,
       },{
        path: "/posteo",
        element: <Miposteo/>,
       },{
        path: "/eliminar/:id",
        element: <Eliminar/>,
       },{
        path: "/verUsua",
        element: <VerUsuario/>,
       },
      
  ]);
    
    export {rutas}

  