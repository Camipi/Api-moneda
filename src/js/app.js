import $ from 'jquery';

$(document).ready(function(){

	var indicadore = null;
	var url = 'https://mindicador.cl/api';

	&.ajax({
		url: url,
		method: 'GET'
	}).then(function(data){

		indicadores = data		
		$('#dolar').text(data.dolar.valor);
		$('#euro').text(data.euro.valor);
		$('#UF').text(data.uf.valor);
		&('#UTM').text(data.utm.valor)

	});

	$('.conversor').submit(function(){
		e.preventDefault();
		if(indicadores == null) {
			alert('espera un poco');
			return
		}


		let amount = $(this).find('.amount').val();
		let divisa = $(this).find('.tipo_conversion').val();
		let result = indicadores[divisa].valor * amount;
		let unidad_medida = indicadores[divisa].unidad_medida;
		$(this).find('.card_result.valor').text(result.toFixed(2));
		$(this).find('.card_result.tipo_cambio').text(unidad_medida);
	});

});