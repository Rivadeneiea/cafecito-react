// la funsion por parametro usuario con mail y password
export const login = async (usuario) => {
  try {
    const promesa = await fetch("json-server --watch db.json --port 3004");
    const listaUsuarios = await respuesta.json();
    // pedir lista de usuarios a json server
    // buscar usuario que complete el formulario
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.mail
    );
    // preguntar si encontro el usuario
    if (usuarioBuscado) {
      // si encontre el usuario y el password es correcto
      if (usuarioBuscado.password === usuario.password) {
        console.log("todo esta perfecto");
        return usuarioBuscado;
      } else {
        console.log("el passward es incorrecto");
        return null;
      }
    } else {
      // si lo encuentra es correcto caso contario salio todod mal
      console.log("el mail es incorrecto");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
