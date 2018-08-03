$(document).ready(function(){

	&.ajax({
		url: 'https://mindicador.cl/api/dolar_intercambio',
		method: 'GET'
	}).then(function(data){
		console.log(data);
	});
	
});