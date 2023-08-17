import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProducto, obtenerUnProducto } from "../../helpers/queries";
import Swal from "sweetalert2";

const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm(() => {
    obtenerUnProducto(id)
      .then((respuesta) => {
        if (respuesta) {
          setValue("nombreProducto", respuesta.producto);
        }
      })
      .catch((error) => {});
  });
  // esta funcion pide logear al usuario
  const onSubmit = (producto) => {
    console.log("aca agrego logica");
    console.log(producto);

    crearProducto(producto)
      .then((respuesta) => {
        if (respuesta.status === 201) {
          Swal.fire(
            "producto guardado",
            "su producto se guardo correctamente",
            "success"
          );
          reset();
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "hubo un error ",
          "se produjo un error al cargar producto",
          "error"
        );
      });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("producto", {
              required: "ingrese un producto valido",
            })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>descripcion del producto</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Leave a comment here"
            {...register("descripcionProducto", {
              required: "ingrese un producto valido",
            })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precioProducto", {
              required: "ingrese un precio valido",
            })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoriaProducto", {
              required: "ingrese un producto valido",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearProducto;
