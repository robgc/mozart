/**
 * @author Robert
 */
function mostrarCamposModificar()
{
	document.getElementById("camposModificar").style.display = "block";
}

function ocultarCamposModificar()
{
	document.getElementById("camposModificar").style.display = "none";
}

function validaMod()
{
	var res = true;
	document.getElementById("erroresModificacion").innerHTML="";
	
	if (comprueba("input_email") || comprueba("input_telefono")) {
		res = false;
	}
	
	if (comprueba("input_email")) {
		document.getElementById("erroresModificacion").innerHTML+="El campo email no puede estar vacío</br>";
		document.getElementById("label_input_email").style.color="red";
	} else {
		document.getElementById("label_input_email").style.color="black";
	}
	
	if (comprueba("input_telefono")) {
		document.getElementById("erroresModificacion").innerHTML+="El campo teléfono no está debidamente cumplimentado</br>";
		document.getElementById("label_input_telefono").style.color="red";
	} else {
		document.getElementById("label_input_telefono").style.color="black";
	}
	
	document.close();
	return res;
}

function comprueba(str)
{
	var res = false;
	if (str == "input_telefono" && 
		(document.getElementById(str).value == "" || document.getElementById(str).value.length < 9))
		res = true;
	
	if (str == "input_email" && document.getElementById(str).value == "")
		res = true;
	
	return res;
}
