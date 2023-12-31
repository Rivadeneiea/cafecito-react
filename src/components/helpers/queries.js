import EditarProducto from "../views/producto/EditarProducto";

// la funsion por parametro usuario con mail y password
const uriUsuario = import.meta.env.VITE_API_USUARIO;
const uriProducto = import.meta.env.VITE_API_PRODUCTOS;

// export const login = async (usuario) => {
//   try {
//     const promesa = await fetch(uriUsuario);
//     const listaUsuarios = await promesa.json();
//     // pedir lista de usuarios a json server
//     // buscar usuario que complete el formulario
//     const usuarioBuscado = listaUsuarios.find(
//       (itemUsuario) => itemUsuario.email === usuario.email
//     );
//     // preguntar si encontro el usuario
//     if (usuarioBuscado) {
//       // si encontre el usuario y el password es correcto
//       if (usuarioBuscado.password === usuario.password) {
//         console.log("todo esta perfecto");
//         return usuarioBuscado;
//       } else {
//         console.log("el passward es incorrecto");
//         return null;
//       }
//     } else {
//       // si lo encuentra es correcto caso contario salio todod mal
//       console.log("el mail es incorrecto");
//       return null;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
export const login = async (usuario) => {
  try {
    console.log(usuario);
    const respuesta = await fetch(URL_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      mensaje: datos.mensaje,
      usuario: datos.nombre,
      // token: datos.token,
      uid: datos.uid,
    };
  } catch (error) {
    console.log("errores en el login");
    return;
  }
};
// solicitudes o peticiones a la api
// peticion GET devuelve un listado de elementos o un elemento
//peticion POST, crear un elemento nuevo. (login)
// peticion PUT, modifica todos los valores de un elemento
// peticion PATCH, modifica el valor de un elemento
// peticion DELETE, ELIMINAR un elemento

export const listarProductos = async () => {
  try {
    const respuesta = await fetch(uriProducto);
    console.log(respuesta);
    const listarProductos = await respuesta.json();
    // (json trae el archivo de la api) extraigo los datos del body y trae el dato para mostrar
    // por pantalla
    return listarProductos;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const crearProducto = async (producto) => {
  try {
    const respuesta = await fetch(uriProducto, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
export const obtenerUnProducto = async (id) => {
  try {
    const respuesta = await fetch(`${uriProducto}/${id}`);
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editarProducto = async (id, productoEditado) => {
  try {
    const respuesta = await fetch(`${uriProducto}/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoEditado),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarProducto = async (id) => {
  try {
    const respuesta = await fetch(`${uriProducto}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
