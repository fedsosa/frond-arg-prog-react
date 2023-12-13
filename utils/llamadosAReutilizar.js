
import axios from 'axios';



const datosDeUnUsuarioPorId = async(id)=>{
    const endpoint = 'http://localhost:3000/usuario' + '/' + id;

    try {
        const respuesta = await axios.get(endpoint )  
                 
    if (respuesta.status === 200) {
        const usuario = respuesta.data;  
        return usuario;

    } else {
       return false;
    }

         } catch (error) {
            return false;
           }

  }
export {
    datosDeUnUsuarioPorId,
}