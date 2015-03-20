angular
  .module("clientApp")
  .controller("UserListController", UserListController);

UserListController.$inject = ['UserService', '$rootScope'];

function UserListController(userService, $rootScope) {
  
  var vm = this;
  vm.isLoggedIn = $rootScope.isLoggedIn;
  
  //Anropar UserService för att hämta alla användare
  var userPromise = userService.get();
  userPromise
    .then(function(data){
    vm.userList = data;
  })
    .catch(function(error) {
    vm.message = error;
  });
}