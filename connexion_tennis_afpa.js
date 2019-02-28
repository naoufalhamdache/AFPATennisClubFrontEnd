
const name = "Naoufal";
const pass = "test86";

function validate()
{
	if ((document.getElementById("username").value == name) && (document.getElementById("password").value == pass))
	{alert ("Connexion réussie");
	document.getElementById("username").value = null;
	document.getElementById("password").value = null;
	document.getElementById("souvenir").checked = false;
	return true;}
	
	else
	{alert("Identifiant ou mot de passe incorrect");
	document.getElementById("username").value = null;
	document.getElementById("password").value = null;
	document.getElementById("souvenir").checked = false;
	return false;}
}