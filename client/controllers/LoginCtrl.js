angular
  .module("clientApp")
  .controller("LoginController", LoginController);

LoginController.$inject = ['$http', '$rootScope', '$location'];

function LoginController($http, $rootScope, $location) {
  
  var vm = this;

  $rootScope.isLoggedIn = false;
  
  //Gör en login-request när användaren klickar på inloggningsknappen
  vm.login = function() {
    var data = {'email' : vm.email, 'password': vm.password};
    var url = "http://localhost:3000/login";
    var config = {
      headers: {
        "X-ApiKey" : "ec5e58d004bcbde0b409bd90593cc28f",
        "Accept" : "application/json"
      }
    }
    
    var promise = $http.post(url, data, config);
    promise.success(function(data, status, headers, config) {
      $rootScope.token = data.auth_token;
      $rootScope.user_id = data.user_id;
      $rootScope.isLoggedIn = true;
      $location.path('/attractions')
    });
    
    promise.error(function(data, status, headers, config) {
      vm.message = data.error;
      $rootScope.isLoggedIn = false;
    });
  };
}