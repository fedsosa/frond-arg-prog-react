import { createContext, useContext, useState } from "react";
import { guardarDatos,
            guardarToken,
            obtenerDatos,
            obtenerToken,
            limpiarLocalStorage } from "../../utils/ingresarUsuarioToken";

const AutenContex=createContext();

const AutentProvider= (props)=> {
    const {children} = props;
  const [usuario,setUsuario] =useState(obtenerDatos());
  const [token,setToken] = useState (obtenerToken());


  const login=(datos,token)=>{
   
    guardarDatos(datos);
    guardarToken(token);

    setUsuario(datos);
    setToken(token);
  }

  const logout=()=>{
    limpiarLocalStorage();
    setUsuario(null);
    setToken(null);
    }
  return (
    <AutenContex.Provider value={{usuario, token, login,logout }}>
        {children}
    </AutenContex.Provider>
  )
} 

const useAutent = () => useContext(AutenContex);

export{
    AutentProvider,
    useAutent ,
};
