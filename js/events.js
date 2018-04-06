function getIt(){
	$('p').on('click',function() {alert('Hey!')})
}

function frameIt(){
	$('img').on('load', function() {$('img').addClass('tasty')})

}

function submitIt(){
	$('form').on('submit', function() {alert('Your form is going to be submitted now.')})
}

function pressIt(){

	$('#typing').on('keydown', function(key) { 
		if (key.which == 71){
			alert('hi')
		}
	  })
}

$(document).ready(function(){

	getIt()
	frameIt()
	pressIt()

});
