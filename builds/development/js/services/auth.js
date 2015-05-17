/**
 * Created by Randy on 4/6/2015.
 */
// Making a factory

myApp.factory('Auth', function($firebase, $firebaseAuth, $routeParams, $location, FIREBASE_URL) {

    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);

    var myObject = {
        login: function(user) {
            return auth.$authWithPassword({
                email: user.email,
                password: user.password
            }); // authWithPassword
        }, // Login User

        register: function(user) {
            return auth.$createUser({
                email: user.email,
                password: user.password
            });
        } // Creates a new user in Firebase
    };

    return myObject;

});