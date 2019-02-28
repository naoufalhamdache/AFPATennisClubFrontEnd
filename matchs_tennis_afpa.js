function savematch()
		{
			var tournoi = $("#tournoi").val();
			var joueur1 = $("#joueur1").val();
			var joueur2 = $("#joueur2").val();
			var arbitre =$("#arbitre").val();
			var court = $("#court").val();
			var date = $("#datepicker").val();

			if (tournoi == "none")
			{alert ("Merci d'indiquer un tournoi.");}
			else if (joueur1 == "none")
			{alert ("Merci de selectionner le premier joueur.");}
			else if (joueur2 == "none")
			{alert ("Merci de selectionner le second joueur.");}
			else if (arbitre == "none")
			{alert ("Merci de selectionner l'arbitre.");}
			else if (court == "none")
			{alert ("Merci de selectionner un court.");}
			else if (date == "")
			{alert ("Merci de choisir une date.");}
			else
				{
				$("#liste").append("<p id=\"match\"> " + tournoi + "<br>" + joueur1 + " vs<br>" + joueur2 + "<br>" + "Arbitre : " + arbitre + "<br>" + court + "<br>" + date + " </p>");
				$("#tournoi").val("none");
				$("#joueur1").val("none");
				$("#joueur2").val("none");
				$("#arbitre").val("none");
				$("#court").val("none");
				$("#datepicker").val("");

				}
		}


$(function() {
    $("#datepicker").datepicker();
} );