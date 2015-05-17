// binding a controller to myApp

myApp.controller('RegistrationController', 
	function($scope, $firebaseAuth, $location, Auth) {

        var ref = new Firebase('https://randy-meetingapp.firebaseio.com/');
        var auth = $firebaseAuth(ref);

	//Using Services - redirects user after login
	$scope.login = function() {
		Auth.login($scope.user).then(function(user) {
           $location.path('/meetings');
        }).catch(function(error) {
            $scope.message = error.message;
        });
	}; // Login User

	$scope.register = function() {
		Auth.register($scope.user)
            .then(function(user) {
                Auth.login($scope.user);
                $location.path('/meetings');
            }).catch(function(error) {
                $scope.message = error.message;
            }).then(function(regUser) {

                var ref = new FireBase(FIREBASE_URL + 'users');
                var firebaseUsers = $firebase(ref);

                var userInfo = {
                    date    : Firebase.ServerValue.TIMESTAMP,
                    regUser : regUser.uid,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email   : user.email
                }; // Storing User Info

                firebaseUsers.$set(regUser.uid, userInfo);
            }); // The Promise
	}; // Registering Users


	// Accessing and setting variables(functions) in login.html
	// $scope.login = function() {
	// 	alert($scope.user.email);


	// Testing for eventhandlers
	// $scope.$on('$viewContentLoaded', function() {
	// 	console.log($scope.myform);
	// })
}); // RegistrationController
