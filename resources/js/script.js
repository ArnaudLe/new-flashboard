$(document).ready(function()
{
	/* ===== POPOVER ===== */
	$(function()
	{
		/* Active Popover sur tout le document */
  		$('[data-toggle="popover"]').popover();

  		/* Ferme le popover au prochain clic */
  		$('.popover-dismiss').popover(
  		{
  			trigger: 'focus'
		});
	});


	/* ===== GESTION BOUTON CONNEXION ===== */
	var $uid = $('#uid'),
	$mdp = $('#mdp'),
	$messageErreur = $("div[class*='alert']"),
	$connexion = $("#connexion");

	$connexion.click(function(e)
	{
		e.preventDefault();

		var uidRegex = "^[0-9ab][0-9]{5}$" /*123456 ou a23456 ou b23456 */
		if(!$uid.val().match(uidRegex))
		{
			$messageErreur.removeClass("hidden");
		}
		else
		{
			$messageErreur.addClass("hidden");
			window.location="index.html";
		}
	});
});