import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProducto, listarProductos } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemProducto = ({
  _id,
  nombreProducto,
  precio,
  imagen,
  categoria,
  setProductos,
}) => {
  const borrarProductoAdmin = () => {
    Swal.fire({
      title: "¿Esta seguro de eliminar producto?",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarProducto(id).then((respuesta) => {
          if (respuesta.status === 200) {
            listarProductos().then((respuesta) => {
              console.log(respuesta);
              setProductos(respuesta);
            });
            Swal.fire(
              "Producto eliminado",
              "El producto fue correctamente borrado del catalogo",
              "success"
            );
          } else {
            Swal.fire(
              "Se produjo un error",
              "Intente realizar esta operación mas tarde",
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{_id}</td>
      <td>{nombreProducto}</td>
      <td>$ {precio}</td>
      <td>{imagen}</td>
      <td>{categoria}</td>
      <td>
        <Link className="btn btn-warning" to={`/administrador/editar/${_id}`}>
          Editar
        </Link>
        <Button variant="danger" onClick={borrarProductoAdmin}>
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
