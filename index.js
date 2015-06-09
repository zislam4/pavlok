var main = function() {
	$('.btn').click(function () {
		console.log("You clicked on the button!");
		var request = new XMLHttpRequest();
		request.open('GET', 'pavlok-cal.herokuapp.com', true);
		request.onreadystatechange = display;
		request.send();
	});
}

var display = function() {
	
	if (request.readystate == 4 && request.status == 200) {
		console.log(request.responseText);

	}
}

$(document).ready(main);
