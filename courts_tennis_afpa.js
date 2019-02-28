var nom = " ";

function savecourt()
		{
			if ($("#username1").val() == "")
			{alert ("Le champ nom est obligatoire");}
			else
			{
				nom = document.getElementById("username1").value;
				document.getElementById("liste").innerHTML += "<p> "+ nom + " </p>";
				document.getElementById("username1").value = "";
			}
		}