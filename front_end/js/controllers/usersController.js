angular
  .module('estudiuMagus')
  .controller('usersController', usersController)

usersController.$inject = ['User', 'TokenService', '$location']
function usersController(User, TokenService, $location){
  var self = this
  self.all = [];
  self.user = {};
  self.userMin = {}

  function userLogIn(res){
    var token = res.token ? res.token : null
    if(token){
      self.user = TokenService.getUser();
      self.userMin = self.user._doc.local
      console.log(userMin);
      $location.path('/');
    }
  }
  self.login = function(){
    console.log(self.user);
    User.login(self.user, userLogIn);

  }
  self.register = function() {
    console.log(self.user);
    User.register(self.user, userLogIn);
  }
  self.logOut = function(){
    TokenService.removeToken();
    self.all = [];
    self.user = {};
    $location.path('/login')
  }
  self.isLoggedIn = function(){
    return !!TokenService.getToken();
  }

  if(self.isLoggedIn()){
    self.user = TokenService.getUser();
    self.userMin = self.user._doc.local;
    console.log(self.userMin.name);
  }
}