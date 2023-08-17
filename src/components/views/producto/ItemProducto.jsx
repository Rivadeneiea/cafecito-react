import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Administrador from "../Administrador";

const ItemProducto = ({ id, nombreProducto, precio, imagen, categoria }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{nombreProducto}</td>
      <td>$ {precio}</td>
      <td>{imagen}</td>
      <td>{categoria}</td>
      <td>
        <Link className="btn btn-warning" to={`/administrador/editar/${id}`}>
          Editar
        </Link>
        <Link className="btn btn-danger" to={`/administrador/editar/${id}`}>
          Borrar
        </Link>
      </td>
    </tr>
  );
};

export default ItemProducto;
