$(document).ready(function() {
	$('#addNumber').keydown(function(event) {
		var fizzNumber = +$('#addNumber').val();
		if(event.keyCode == 13) {
			if (fizzNumber <= 0 || fizzNumber >= 100 || isNaN(fizzNumber)){
				alert('That is not a number between 1 and 100');
			} else {
				fizzBuzz(fizzNumber);
			}

		}
	});
});

//how does it know the use this variable when the input number is entered?
//whats the difference between this function(number) and the variable num
var fizzBuzz = function(number) {
	for (var i = 1; i <= number; i++){
    if(i % 15 === 0){
        console.log("Fizz Buzz");
        $('#result').append("Fizz Buzz ");
    }else if (i % 3 === 0){
            console.log("Fizz");
            $('#result').append("Fizz ");
       }else if(i % 5 === 0){
            console.log("Buzz");
            $('#result').append("Buzz ");
       }
     else {
            console.log(i);
            $('#result').append(i + " ");
        }
	}
};

/*$(document).ready(function() {
	$('#addNumber').keydown(function(event) {
		var num = +$('#addNumber').val();
		if (event.keyCode == 13) {
			if ((num.length === 0) && (isNaN(num)) && (num<= 0) && (num % != 0) &&()) {
				alert("That is not a number between 1 and 100!");
			} else {
				$('#result').content().remove();
					fizzbuzz(num);
				}

			}
		}
	);
});*/