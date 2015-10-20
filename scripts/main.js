'use strict';
let $ = require('jquery');


function legalAge(age){
	let intAge = parseInt(age)
	if(age.match(/.*[.]/)){return $('div').html(`<div>Please enter a Whole number!</div>`)};
	if(!Number.isInteger(intAge)){return $('div').html(`<div>Please enter a Whole number!</div>`)};
	if (intAge <= 0) { return $('div').html(`<div>Please enter a valid age!</div>`)};
	intAge > 0 && intAge < 16 ?  $('div').html(`<div>Your not of driving age.</div>`) : $('div').html(`<div>You can drive!</div>`);
};
$(document).ready(function(){
	$('form').on('submit', function(e){
		e.preventDefault();
		legalAge($('input').val());
	})
});
