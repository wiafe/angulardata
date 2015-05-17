var myApp = angular.module('myApp', ["ngRoute", "firebase", "appControllers"]).constant('FIREBASE_URL', 'https://randy-meetingapp.firebaseio.com/');

// Where dependencies go
var appControllers = angular.module("appControllers", 
	["firebase"]);

//re-routing pages gives the single page feel
myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'RegistrationController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegistrationController'
		}).
		when('/meetings', {
			templateUrl: 'views/meetings.html',
			controller: 'MeetingsController'
		}).
		otherwise({
			redirectTo: '/login' //starts at login.html if they haven't logged in!
		});
}]);