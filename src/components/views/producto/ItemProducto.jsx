import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProducto } from "../../helpers/queries";

const ItemProducto = ({ id, nombreProducto, precio, imagen, categoria }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "Esta seguro de eliminar producto?",
      text: "no se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "error",
      cancelButtonColor: "success",
      confirmButtonText: "borrar",
      cancelButtonText: "cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "El juego fue eliminado con exito", "success");
        borrarJuego(juego.id);
      }
    });
  };
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
        <Button variant="danger" onClick={borrarProducto}></Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
