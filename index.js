var main = function() {


	var request = new XMLHttpRequest();

	$('.btn').click(function () {
		console.log("You clicked on the button!");
		request.open('GET', 'https://pavlok-cal.herokuapp.com/addCal', true);
		request.setRequestHeader("Access-Control-Allow-Origin", "Content-type", "application/x-www-form-urlencoded");
		request.onreadystatechange = function display() {
			console.log(request.readyState);
			if (request.readyState == 4) {
				console.log(request.status);
				if (request.status == 200) {
					console.log("Request was successful");
					console.log(request.response);
				}
			}
		};

		request.send();
	});

}

$(document).ready(main);
