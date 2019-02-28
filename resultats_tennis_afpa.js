function savescore()
		{
			var joueur1 = $("#joueur1").val();
			var joueur2 = $("#joueur2").val();
			var score1 = $("#score1").val();
			var score2 = $("#score2").val();

			if (joueur1 == "none")
			{alert ("Merci de selectionner le premier joueur.");}
			else if (score1 == "")
			{alert ("Merci de saisir le score du joueur 1");}
			else if (!$.isNumeric(score1))
			{alert ("Merci de saisir un nombre pour le score du joueur 1"); $("#score1").val("");}
			
			else if (joueur2 == "none")
			{alert ("Merci de selectionner le second joueur.");}
			else if (score2 == "")
			{alert ("Merci de saisir le score du joueur 2");}
			else if (!$.isNumeric(score2))
			{alert ("Merci de saisir un nombre pour le score du joueur 2"); $("#score2").val("");}
			
			else
			{
				$("#liste").append("<p id=\"score\"> " + joueur1 + " : " + score1 + "<br>" + joueur2 + " : " + score2 +" </p>");
				$("#joueur1").val("none");
				$("#score1").val("");
				$("#joueur2").val("none");
				$("#score2").val("");
			}
		}