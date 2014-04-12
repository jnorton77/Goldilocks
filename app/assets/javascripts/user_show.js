$(document).ready(function() {
	$("#retrieve_all").on("click", function() {
		$.ajax({
			url: "/users/index/results",
			type: "get"
		})
		.done(function(data) {
			console.log(data)
		})
	})
	$("#retrieve_for_user").on("click", function() {
		$.ajax({
			url: "/users/"+userId+"/results",
			type: "get"
		})
		.done(function(data) {
			console.log(data)
		});
	});
});
