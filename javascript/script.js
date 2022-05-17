/*Funcion Mostrar menu de comprobantes
Funciona cuando el navegador abre nuestro documento
*/
jQuery('document').ready(function($) {
	var menuBtn = $('.menu-icon'), /* creacion de var menu-icon*/
		menu = $('.navegacion ul'); /* creacion de var que sera el menu*/

	menuBtn.click(function() {
		/* condicional que sucede al hacer click en icono menu*/
		if (menu.hasClass('show')) {
			/* Si menu = .navigation ul tiene la clase "show"*/

			menu.removeClass('show'); /* sacar la clase "show", esto hara que no se vea de una vez*/
		} else {
			menu.addClass('show'); /* sino, se la añade para poder ver el menu*/
		}
	});
});
