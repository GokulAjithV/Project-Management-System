var app = angular.module('myapp',['ngRoute']);

app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/dashboard',{
        templateUrl: 'views/dashboard.html'
    })
    .when('/addClient',{
        templateUrl: 'views/addClient.html'
    }).otherwise({
        redirectTo: '/dashboard'
    })
    .when('/viewClient',{
        templateUrl: 'views/viewClient.html'
    }).otherwise({
        redirectTo: '/dashboard'
    })
    .when('/addEmployee',{
        templateUrl: 'views/addEmployee.html'
    }).otherwise({
        redirectTo: '/dashboard'
    })
    .when('/viewEmployee',{
        templateUrl: 'views/viewEmployee.html'
    }).otherwise({
        redirectTo: '/dashboard'
    })
    .when('/employeeAccess',{
        templateUrl: 'views/employeeAccess.html'
    }).otherwise({
        redirectTo: '/dashboard'
    })
    .when('/addInterview',{
        templateUrl: 'views/addInterview.html'
    }).otherwise({
        redirectTo: '/dashboard'
    })
    .when('/addDesignation',{
        templateUrl: 'views/addDesignation.html'
    }).otherwise({
        redirectTo: '/dashboard'
    })

});

var app = angular.module("menuApp", []);
app.controller("menuController", function($scope) {
    $scope.menus = [
        {
            title : "Home",
            link: "#",
        },
        {
            title: "Interview",
            link : "http://localhost:8080/addInterview"   
        },
        {
            title : "addClient",
            link : "http://localhost:8080/addClient"
        },
        {
            title : "viewClient",
            link : 'http://localhost:8080/viewClient'
        },
        {
            title : "addEmployee",
            link : "http://localhost:8080/addEmployee"
        }
    ]
})

