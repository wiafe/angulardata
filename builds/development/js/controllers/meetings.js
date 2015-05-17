myApp.controller('MeetingsController', 
	function($scope, $firebase) {

		// You want the exact location of the meetings
		var ref = new Firebase('https://randy-meetingapp.firebaseio.com/meetings');

		// Passing it through view/template
		var meetings = $firebase(ref);
		$scope.meetings = meetings.$asObject();

		// Pushing data to firebase
		$scope.addMeeting = function() {
			meetings.$push({
				name: $scope.meetingname,
				date: Firebase.ServerValue.TIMESTAMP
			}).then(function(){
				$scope.meetingname="";
			});
		}; // Data binding to firebase

        // Deleting a meeting from inside the app
        $scope.deleteMeeting = function(key) {
            meetings.$remove(key);
        };

}); // MeetingsController
