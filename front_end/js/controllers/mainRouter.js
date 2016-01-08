angular
  .module('estudiuMagus')
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider, $locationProvider, ROOT){
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: ROOT + 'partials/login.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: ROOT + 'partials/register.html'
  });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
}