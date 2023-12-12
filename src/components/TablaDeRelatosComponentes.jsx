import Table from 'react-bootstrap/Table';

import { useNavigate } from "react-router-dom";


const TablaDeRelatos = (props) => {
  const { lista } = props;

  //const navigate = useNavigate();



  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Titulo</th>
          <th>Narrar</th>
          <th>Autor</th>
          <th>comentarios</th>
        </tr>
      </thead>
      <tbody>
        {
          lista.map((item, key) => (
            <tr key={key}>
              <td>{item.id}</td>
              <td>{item.titulo}</td>
              <td>{item.narrar}</td>
              <td>{item.autor}</td>
              <td>
               
              </td>
            </tr>

          ))
        }


      </tbody>
    </Table>
  );
}

export default TablaDeRelatos ;