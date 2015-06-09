var main = function() {


	var request = new XMLHttpRequest();

	$('.btn').click(function () {
		console.log("You clicked on the button!");
		request.open('GET', 'pavlok-cal.herokuapp.com', true);
		request.onreadystatechange = display;
		request.send();
	});

	function display() {
	
		if (request.readystate == 4 && request.status == 200) {
			console.log("Request was successful");
			console.log(request.response);

		}
	}	

}

$(document).ready(main);
