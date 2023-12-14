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

  const login=(datos,token)=>{
   
    guardarDatos(datos);
    guardarToken(token);

    setUsuario(datos);
  }

  const logout=()=>{
    limpiarLocalStorage();
    setUsuario(null);

    }
  return (
    <AutenContex.Provider value={{usuario, login,logout }}>
        {children}
    </AutenContex.Provider>
  )
} 

const useAutent = () => useContext(AutenContex);

export{
    AutentProvider,
    useAutent ,
};
