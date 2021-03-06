var chart = angular.module('chart', []);

chart.controller('chartController', function($scope){
	$scope.data = {
				labels : ["January", "February", "March", "April", "May", "June", "July"],
				datasets : [{
					label : "My First dataset",
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill : "rgba(220,220,220,0.75)",
					highlightStroke : "rgba(220,220,220,1)",
					data : [65, 59, 80, 81, 56, 55, 40]
				}, {
					label : "My Second dataset",
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,0.8)",
					highlightFill : "rgba(151,187,205,0.75)",
					highlightStroke : "rgba(151,187,205,1)",
					data : [28, 48, 40, 19, 86, 27, 90]
				}]
			};
});

chart.directive('barChart', function() {
	return {
		scope: {},
		template : '<canvas id="myChart" width="600" height="600"></canvas>',
		link : function(scope, element, attrs) {
			scope.data = JSON.parse(attrs.details);
			scope.ctx = document.getElementById("myChart").getContext("2d");
			scope.myNewChart = new Chart(scope.ctx).Bar(scope.data);
		}
	};
});
