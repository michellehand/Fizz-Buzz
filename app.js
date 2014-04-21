$('#addNumber').keydown(function(event) {
	if(event.which == 13) {
		var fizzNumber = $('#addNumber').val();
		if ((fizzNumber >= 0) && (fizzNumber<=100)){
			fizzbuzz());
		} else {
			alert('That is not a number between 1 and 100');
		}

	}
)};

var fizzBuzz = function(number) {
	for (var i = 1; i <= number; i++){
    if(i % 15 === 0){
        console.log("Fizz Buzz");
        $('#result').append("Fizz Buzz");
    }else if (i % 3 === 0){
            console.log("Fizz");
            $('#result').append("Fizz");
       }else if(i % 5 === 0){
            console.log("Buzz");
            $('#result').append("Buzz");
       }
     else {
            console.log(i);
            $('#result').append(i);
        }
	}
)};
