import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useState, useEffect } from "react";
import { listarProductos } from "../helpers/queries";
import Swal from "sweetalert2";
const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    listarProductos().then((respuestaProductos) => {
      if (respuestaProductos) {
        // actualizar el estado
        setProductos(respuestaProductos);
      } else {
        Swal.fire("ocurrio un error", "intente mas tarde", "error");
      }
    });
  }, []);
  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="fondo cafe"
      />
      <Container>
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
        {/* aqui tengo que mapear */}
        <Row>
          {productos.map((producto) => (
            <CardProducto key={producto._id} producto={producto}></CardProducto>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
