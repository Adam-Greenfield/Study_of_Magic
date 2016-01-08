angular
  .module('estudiuMagus', ['angular-jwt', 'ngResource', 'ui.router'])
  .constant('API', 'http://localhost:3000/api')
  .constant('ROOT', 'http://localhost:8000/')
  .config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
  });