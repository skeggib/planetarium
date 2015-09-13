$(function() {
				
	// Creation de l'html
	$("div.planete").append('\
		<div class="trajectory"></div>\
		\
		<div class="disc-container">\
			<div class="disc"></div>\
		</div>\
	');

	// Application du css à partir des attributs
	$('div.planete').each(function() {

		// Distance de la planete
		var distance = $(this).data('planetarium-distance');
		$(this).css('height', distance + '%');
		$(this).css('width', distance + '%');

		// Taille de la planete
		var size = $(this).data('planetarium-size');
		size = size / 2;
		$(this).find('div.disc').css('width', size / (distance / 100) + '%');
		$(this).find('div.disc').css('height', size / (distance / 100) + '%');

		// Vitesse de rotation
		var rotationTime = $(this).data('planetarium-rotation-time');
		$(this).find('div.disc-container').css('animation-duration', rotationTime + 's');

		// Couleur
		color = $(this).data('planetarium-color');
		console.log(color);
		if (color != "") {
			$(this).find('div.disc').css('background-color', color);
		}
	});

	// Soleil
	var sunSize = $('div.sun').data('planetarium-size');
	$('div.sun').css('width', sunSize + '%');
	$('div.sun').css('height', sunSize + '%');

});