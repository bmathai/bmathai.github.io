	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute', 'ngAnimate']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})
			// route for the home page
			.when('/home', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'mainController'
			})

			// route for the projects page
			.when('/projects', {
				templateUrl : 'pages/Projects.html',
				controller  : 'mainController'
			})
			//subprojects
			.when('/flappy', {
				templateUrl : 'Unity_Games/Flappy2015.html',
				controller  : 'mainController'
			})
			.when('/bartok', {
				templateUrl : 'Unity_Games/Bartok.html',
				controller  : 'mainController'
			})
			.when('/tripeaks', {
				templateUrl : 'Unity_Games/Marina_Game.html',
				controller  : 'mainController'
			})

			// route for the contact page
			.when('/asheville', {
				templateUrl : 'Unity_Games/Final_Build.html',
				controller  : 'mainController'
			})

			.when('/proposal', {
				templateUrl : 'pages/proposal.html',
				controller  : 'mainController'
			})

			.when('/senior_project', {
				templateUrl : 'pages/senior_project.html',
				controller  : 'mainController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.showHome = false;
	});