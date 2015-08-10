// ==UserScript==
// @name        Asylamba's Tactics Map
// @namespace   asylamba
// @description Userscript pour l'ajout de dessins tactiques directement sur la map d'Asylamba
// @include     http://game.asylamba.com/*/map*
// @match       http://game.asylamba.com/*/map*
// @grant       GM_xmlhttpRequest
// @updateURL   https://github.com/Genroa/Asylamba-Tactics-Map/raw/master/Asylamba_Tactics_Map.user.js
// @version     0.0.2
// @grant       Genroa
// @author      Genroa
// @require		http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @require		https://cdnjs.cloudflare.com/ajax/libs/interact.js/1.2.4/interact.min.js
// ==/UserScript==

$(function(){
	$('#map').prepend('<div id="ATM" style="width: 100%; height: 100%; position: absolute;"></div>');

	$(document).on('click', function(){

	});
});