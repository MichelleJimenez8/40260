console.log("inicio");

const mostrar = () => {
  console.log("los parámetros");

  const user = document.getElementById("user");
  const password = document.getElementById("password");

  console.log(user.value);
  console.log(password.value);

  const formulario = document.getElementsByTagName("form");

  user.setAttribute("name", "q"); 
  password.setAttribute("name", "password");
  formulario[0].setAttribute("action", "https://google.com/search");

  formulario[0].submit(); 
};

const boton = document.getElementById("enviar");
boton.addEventListener("click", mostrar);