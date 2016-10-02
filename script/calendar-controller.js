var globalDate = new Date();
var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

var calendar = angular.module('calendarApp', []);
calendar.controller('calendarCtrl', function($scope) {
    
    
    $scope.yesterdayDate = (function() {
        return globalDate.getDate() - 1;
    })();

    $scope.todayDate = globalDate.getDate();

    $scope.tomorrowDate = (function() {
        return globalDate.getDate() + 1;
    })();

    $scope.yesterdayWeekday = (function(){
        return days[globalDate.getDay() - 1];
    })();

    $scope.todayWeekDay = (function() {
        return days[globalDate.getDay()];
    })();

    $scope.tomorrowWeekday = (function(){
        return days[globalDate.getDay() + 1];
    })();

    $scope.currentMonth = (function() {
        return months[globalDate.getMonth()];
    })();

    $scope.currentYear = globalDate.getFullYear();
})
