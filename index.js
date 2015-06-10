var main = function() {

	var request = new XMLHttpRequest();

	$('.btn').click(function () {
		var key = $('#key').val();
		console.log("You clicked on the button! Your API key is" + key);
		request.open('GET', 'https://pavlok-cal.herokuapp.com/addCal?key=' + key, true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.onreadystatechange = function display() {
			console.log(request.readyState);
			if (request.readyState == 4) {
				console.log(request.status);
				if (request.status == 200) {
					console.log("Request was successful");
					console.log(request.response);
					var url = '<a href="' + JSON.parse(request.response) + '" target="_blank">Authorize the app</a>';

					$('.content').html(url);

				}
			}
		};

		request.send();
	});

}

$(document).ready(main);
