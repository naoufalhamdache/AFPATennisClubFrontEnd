var nom = " ";
var prenom = " ";
var sexe = " ";
var sexeN = " ";
var nation = " ";

function saveplayer()
		{
			if ($("#username1").val() == "" && $("#username2").val() == "")
			{alert ("Merci de remplir les champs");}
			else if ($("#username1").val() == "")
			{alert ("Le champ nom est obligatoire");}
			else if ($("#username2").val() == "")
			{alert ("Le champ prénom est obligatoire");}
			else if ($("#username1").val() == $("#username2").val())
			{alert ("Le nom et le prénom doivent être différents");}
			else
			{
				nom = document.getElementById("username1").value;
				prenom = document.getElementById("username2").value;
				sexe = document.getElementById("sexe").value;
				nation = document.getElementById("pays").value;
				if (sexe == "féminin")
					{sexeN = "Mme.";}
				else if (sexe == "masculin")
					{sexeN = "M.";}
				else
					{sexeN = "";}
				document.getElementById("liste").innerHTML += "<p> " + sexeN + " " + prenom.charAt(0).toUpperCase() + prenom.substr(1,prenom.length).toLowerCase() + " " + nom.toUpperCase() + " " + nation + " </p>";
				document.getElementById("username1").value = "";
				document.getElementById("username2").value = "";
				document.getElementById("sexe").value = "masculin";
				document.getElementById("pays").value = "France";
			}
		}
		
$("#username2").focus(function(){
			if ($("#username1").val() == "")
			{
				$("<em id=\"msgErr\"> Le champ nom est obligatoire</em>").insertAfter("#username1");
				setTimeout(function(){$("#msgErr").remove();}, 3000);
				$("#username1").focus();
			}
			else
			{
				$("#msgErr").remove();
			}
});