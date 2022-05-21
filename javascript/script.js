/*Funcion Mostrar menu de comprobantes
Funciona cuando el navegador abre nuestro documento*/

 $('document').ready(function() {
	if(window.innerWidth < 768){
		$('.table').addClass('pesos');
	}else{
		$('.table').removeClass('pesos')
	}
 }); /*No me funciono :C*/

