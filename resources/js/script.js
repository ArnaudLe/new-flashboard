$(document).ready(function()
{
	/* ===== POPOVER ===== */
	$(function()
	{
		/* Active Popover sur tout le document */
  		$('[data-toggle="popover"]').popover();
	});


	/* ===== GESTION DES FILTRES ===== */
	$("select").change(function()
	{
		var str = "";
		$("select option:selected").each(function()
		{
			str += $(this).val() + " ";
		});

		if(str.indexOf("mac19") > -1) // str contient "mac19"
		{
			alert(str);
		}
	});


	/* ===== HIGHLIGHT CURRENT PAGE ===== */
	$(function()
	{
		var url = location.pathname.split("/")[1]; // pathname : incident-backlog.php
		var $a = $(' a[href="'+url+'"] '); // sélection du <a> courant : a[href="incident-backlog.php"]

		if(url == "prochainement.php") return; // Aucun hilight de l'onglet pour prochainement.php

		if($a.parent().parent().is(".dropdown-menu")) // Si la page courante est un sous-menu (donc dans dropdown-menu)
		{
			$a.parent().parent().prev().addClass("active"); // le <a> parent est "active"
		}
		else $a.addClass("active"); // Sinon, la page courante n'est pas dans un sous menu
	});


	/* ===== GESTION BOUTON CONNEXION ===== */
	var $uid = $('#uid'),
	$mdp = $('#mdp'),
	$messageErreur = $("div[class*='alert']"),
	$connexion = $("#connexion");

	$connexion.click(function(e)
	{
		e.preventDefault();

		var uidRegex = "^[0-9ab][0-9]{5}$" /* 123456 ou a23456 ou b23456 */
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